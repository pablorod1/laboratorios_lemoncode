import { Account } from "./account-list.api-model";
const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = async (): Promise<Account[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching account list");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching account list", error);
    return [];
  }
};
