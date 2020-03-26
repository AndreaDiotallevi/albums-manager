const app = require('../../server');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
const Album = require('../../models/Album');

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/albums-manager`;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

describe('/api/albums', () => {
  it('should get an empty array', async done => {
    const response = await request.get('/api/albums');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);

    done();
  });

  it('should save an album to database', async done => {
    const response = await request.post('/api/albums')
    .send({
        artist: 'Tycho',
        title: 'Awake'
      });

    const album = await Album.findOne({ artist: 'Tycho', title: 'Awake' });
    
    expect(album.artist).toEqual('Tycho');
    expect(album.title).toEqual('Awake');
    expect(album.loanedTo).toEqual(null);
    expect(album.loanedDate).toEqual(null);

    done();
  });

  it('should get all albums that have been saved', async done => {
    const albums = [{
      artist: 'Tycho', 
      title: 'Awake'
    }, {
      artist: 'Kiasmos', 
      title: 'Blurred'
    }]

    for (const albumData of albums) {
      const album = new Album(albumData);
      await album.save();
    }

    const response = await request.get('/api/albums');

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);

    expect(response.body[0].artist).toEqual("Tycho");
    expect(response.body[0].title).toEqual("Awake");
    expect(response.body[0].loanedTo).toEqual(null);
    expect(response.body[0].loanedDate).toEqual(null);

    expect(response.body[1].artist).toEqual("Kiasmos");
    expect(response.body[1].title).toEqual("Blurred");
    expect(response.body[1].loanedTo).toEqual(null);
    expect(response.body[1].loanedDate).toEqual(null);

    done();
  });
});

afterEach(async () => {
  await Album.deleteMany();
});
