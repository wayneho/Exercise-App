# Exercise Selector
Users can select a muscle group on the human body diagram and the app will render my favourite exercises for that muscle group. Users can also filter exercises by equipment (ex. barbell, dumbbell). The web app uses server rendering where it fetches the initial state from the API server. URLs are implemented for each muscle group to allow linking and bookmarking.

# Tools

- Server rendering
- Hot module reloading
- Redux DevTools
- React-router-redux for URL management
- API Server: https://exerciseapi.herokuapp.com/

| URL                             | HTTP Verb     | Functionality                  |
| -------------                   |:-------------:| -----:                         |
|/muscles                         | GET           | Fetch all muscle groups        |
|/muscles/:muscle                 | GET           | Fetch a specific muscle group  |

