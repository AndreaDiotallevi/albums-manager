const app = require('../../server');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
const Album = require('../../models/Album');

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/albums-manager`;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  global.Date.now = jest.fn(() => new Date('2020-01-01T01:01:01Z').getTime())
});

describe('/api/albums', () => {
  it('should get an empty array', async () => {
    const response = await request.get('/api/albums');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it('should save an album to database', async () => {
    const response = await request.post('/api/albums')
    .send({
        artist: 'Tycho',
        title: 'Awake',
        posterURL: 'url',
        tracks: ['track']
      });

    const album = await Album.findOne({ artist: 'Tycho', title: 'Awake', posterURL: 'url', tracks: ['track'] });
    
    expect(album.artist).toEqual('Tycho');
    expect(album.title).toEqual('Awake');
    expect(album.posterURL).toEqual('url');
    expect(Array.from(album.tracks)).toEqual(['track']);
    expect(album.loanedTo).toEqual(null);
    expect(album.loanedDate).toEqual(null);
  });

  it('should get all albums that have been saved', async () => {
    const albums = [{
      artist: 'Tycho', 
      title: 'Awake',
      posterURL: 'url',
      tracks: ['track']
    }, {
      artist: 'Kiasmos', 
      title: 'Blurred',
      posterURL: 'url',
      tracks: ['track']
    }]

    for (const albumData of albums) {
      const album = new Album(albumData);
      await album.save();
    }

    const response = await request.get('/api/albums');

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);

    expect(response.body[0].artist).toEqual('Tycho');
    expect(response.body[0].title).toEqual('Awake');
    expect(response.body[0].posterURL).toEqual('url');
    expect(response.body[0].tracks).toEqual(['track']);
    expect(response.body[0].loanedTo).toEqual(null);
    expect(response.body[0].loanedDate).toEqual(null);

    expect(response.body[1].artist).toEqual('Kiasmos');
    expect(response.body[1].title).toEqual('Blurred');
    expect(response.body[1].posterURL).toEqual('url');
    expect(response.body[1].tracks).toEqual(['track']);
    expect(response.body[1].loanedTo).toEqual(null);
    expect(response.body[1].loanedDate).toEqual(null);
  });

  it('should update an album', async () => {
    const album = new Album({
      artist: 'Tycho', 
      title: 'Awake',
      posterURL: 'url',
      tracks: ['track']
    });

    await album.save();

    const response = await request.patch(`/api/albums/${album._id}`)
    .send({
        artist: 'Tycho',
        title: 'Awake',
        posterURL: 'url',
        tracks: ['track'],
        loanedTo: 'name',
        loanedDate: null
      });

    expect(response.status).toEqual(200);
    expect(response.body.loanedTo).toEqual('name');
    expect(response.body.loanedDate).toEqual('2020-01-01T01:01:01.000Z');
  });

});

afterEach(async () => {
  await Album.deleteMany();
});
