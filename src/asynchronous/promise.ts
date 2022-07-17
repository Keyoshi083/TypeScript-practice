export default function promiseSample() {
  const url = "https://api.github.com/users/keyoshi083";

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          res
            .json()
            .then((json) => {
              console.log("asynchronous Promise sample 1 ", json);
              resolve(json);
            })
            .catch((err) => {
              console.error(err);
              reject(null);
            });
        })
        .catch((err) => {
          console.error(err);
          reject(null);
        });
    });
  };

  fetchProfile().then((profile: Profile | null) => {
    if (profile) console.log("asynchronous Promise Sample 2", profile);
  });
}
