import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP__COLLECTION, PLAYER__COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP__COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER__COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
