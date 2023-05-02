import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP__COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP__COLLECTION);

    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
