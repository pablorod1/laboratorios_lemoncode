import { AccountDetails, Movement } from "./movement-list.api-model";

const url = import.meta.env.VITE_BASE_API_URL;
const urlMovements = `${url}/movements`;

export const getMovements = async (accountId: string): Promise<Movement[]> => {
  try {
    const response = await fetch(`${urlMovements}?accountId=${accountId}`);
    if (!response.ok) {
      throw new Error("Error fetching movements");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movements", error);
    return [];
  }
};

export const getAccountDetails = async (
  accountId: string
): Promise<AccountDetails> => {
  try {
    const response = await fetch(`${url}/account-list/${accountId}`);
    if (!response.ok) {
      throw new Error("Error fetching account details");
    }
    const data = await response.json();
    return {
      name: data.name,
      iban: data.iban,
    };
  } catch (error) {
    console.error("Error fetching account details", error);
    return {
      name: "",
      iban: "",
    };
  }
};
