import { Account, Transfer } from "./transfer.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = async (): Promise<Account[]> => {
  try {
    const response = await fetch(urlAccount);
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

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;

export const saveTransfer = async (transfer: Transfer): Promise<boolean> => {
  try {
    const response = await fetch(urlTransfer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transfer),
    });
    if (!response.ok) {
      throw new Error("Error saving transfer");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error saving transfer", error);
    return false;
  }
};
