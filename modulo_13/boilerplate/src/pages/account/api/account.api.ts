import { Account } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = async (account: Account): Promise<boolean> => {
  try {
    const response = await fetch(urlAccount, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    });
    if (!response.ok) {
      throw new Error("Error saving account");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error saving account", error);
    return false;
  }
};
