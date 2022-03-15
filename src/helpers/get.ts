async function get<T>(endpoint: string): Promise<T | null> {
  try {
    return (
      await fetch(`${endpoint}`, {
        method: "GET",
      })
    ).json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default get;
