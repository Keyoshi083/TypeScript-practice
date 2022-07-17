export default function callbackSample() {
  const url = "https://api.github.com/users/keyoshi083";

  /**
   * コールバックで呼び出す非同期処理
   */
  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log("asynchronous callback sample 1", json);
            return json;
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
  };

  const profile = fetchProfile();
  console.log("asynchronous callback sample 2", profile);
}
