document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Show "Loading..." with the expected ID
  output.innerHTML = `
    <tr id="loading">
      <td colspan="2" class="text-center">Loading...</td>
    </tr>`;

  const startTime = performance.now(); // Start time

  const promise1 = new Promise((resolve) => {
    const start = performance.now();
    setTimeout(() => {
      resolve({ name: "Promise 1", time: (performance.now() - start) / 1000 });
    }, 2000);
  });

  const promise2 = new Promise((resolve) => {
    const start = performance.now();
    setTimeout(() => {
      resolve({ name: "Promise 2", time: (performance.now() - start) / 1000 });
    }, 1000);
  });

  const promise3 = new Promise((resolve) => {
    const start = performance.now();
    setTimeout(() => {
      resolve({ name: "Promise 3", time: (performance.now() - start) / 1000 });
    }, 3000);
  });

  Promise.all([promise1, promise2, promise3]).then((results) => {
    const endTime = performance.now(); // End time
    const totalTime = (endTime - startTime) / 1000; // Convert to seconds

    let tableRows = results
      .map(
        (result) =>
          `<tr>
            <td>${result.name}</td>
            <td>${result.time.toFixed(3)}</td>
          </tr>`
      )
      .join("");

    tableRows += `
      <tr>
        <th>Total</th>
        <td>${totalTime.toFixed(3)}</td>
      </tr>`;

    output.innerHTML = tableRows; 
  });
});
