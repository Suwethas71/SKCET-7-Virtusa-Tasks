function fetchApiEndpoint(endpointName: string, delayMs: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Response payload from ${endpointName}`);
    }, delayMs);
  });
}

export async function executeSequentialCalls(): Promise<void> {
  console.log("Starting sequential API pipeline...\n");

  try {
    console.log("Dispatching API Call 1...");
    const res1 = await fetchApiEndpoint("https://api.example.com/users", 1000);
    console.log(`Received: ${res1}\n`);

    console.log("Dispatching API Call 2...");
    const res2 = await fetchApiEndpoint("https://api.example.com/orders", 800);
    console.log(`Received: ${res2}\n`);

    console.log("Dispatching API Call 3...");
    const res3 = await fetchApiEndpoint("https://api.example.com/payments", 600);
    console.log(`Received: ${res3}\n`);

    console.log("All sequential API calls finished successfully.");
  } catch (error) {
    console.error("An error occurred during API execution:", error);
  }
}

executeSequentialCalls();
