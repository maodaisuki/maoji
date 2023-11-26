import store from "../../store";
import { handleParseError } from '../../utils/handleParseError';

export async function isUserExist(username) {
  const Parse = store.state.parseObject;
  let query = Parse.Query(Parse.User);
  query.equalTo("username", username);
  try {
    const result = await query.first();
    // console.log("用户存在");
    return result != null;
  } catch (e) {
    console.log(e.message);
    handleParseError(e);
    return false;
  }
}