import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER__COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${PLAYER__COLLECTION}-${group}`
    );

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
