import { useLocalStorage } from "@hooks/useLocalStorage";

// TODO: Implementar lógica
export async function deleteCustomer(id: string): Promise<void> {

  const customers = useLocalStorage().getItem("customers")

  const notDeletedCustomers = customers.filter( item => item.id !== id)

  useLocalStorage().saveItem("customers", notDeletedCustomers)
}
