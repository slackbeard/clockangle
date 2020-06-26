## Clock Angle
Returns the smallest angle between the hour and minute hands of a clock.

### Running
Build the docker container:
```
$ docker-compose build
```

Run the docker container:
```
$ docker-compose up
```

The server will now be listening on port 8000.
You can test it by navigating to http://localhost:8000/v1/angle/1/30

### API

Get the angle between clock hour hand and minute hand:

```
/v1/angle/<hours>/<minutes>
```

Response format:
```
{
    "angle": <angle>
}
```


### Testing

```
$ npm run test
```