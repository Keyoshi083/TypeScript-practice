export default async function asyncAwaitSample() {
  const url = "https://api.github.com/users/keyoshi083";

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((err) => console.error(err));
    if (!response) {
      return null;
    }
    const json = await response
      .json()
      .then((json) => {
        console.log("Asynchronous async/await Sample 1 ", json);
        return json;
      })
      .catch((err) => console.error(err));
    if (!json) {
      return null;
    }
    return json;
  };

  const fetchProfile2 = async (): Promise<Profile | null> => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((err) => console.error(err));
    if (!response) {
      return null;
    }
    const json = await response
      .json()
      .then((json) => {
        console.log("Asynchronous async/await Sample 3 ", json);
        return json;
      })
      .catch((err) => console.error(err));
    if (!json) {
      return null;
    }
    return json;
  };

  const profile = await fetchProfile();
  if (profile) {
    console.log("Asynchronous async/await Sample 2 ", profile);
  }

  const profile2 = await fetchProfile2();
  if (profile2) {
    console.log("Asynchronous async/await Sample 4 ", profile2);
  }
}
