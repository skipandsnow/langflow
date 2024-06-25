import { expect, test } from "@playwright/test";
import * as dotenv from "dotenv";
import path from "path";

test("TextInputOutputComponent", async ({ page }) => {
  if (!process.env.CI) {
    dotenv.config({ path: path.resolve(__dirname, "../../.env") });
  }

  await page.goto("/");
  await page.waitForTimeout(2000);

  let modalCount = 0;
  try {
    const modalTitleElement = await page?.getByTestId("modal-title");
    if (modalTitleElement) {
      modalCount = await modalTitleElement.count();
    }
  } catch (error) {
    modalCount = 0;
  }

  while (modalCount === 0) {
    await page.getByText("New Project", { exact: true }).click();
    await page.waitForTimeout(5000);
    modalCount = await page.getByTestId("modal-title")?.count();
  }

  await page.waitForTimeout(1000);

  await page.getByTestId("blank-flow").click();
  await page.waitForSelector('[data-testid="extended-disclosure"]', {
    timeout: 30000,
  });

  const focusElementsOnBoard = async ({ page }) => {
    const focusElements = await page.getByTestId("extended-disclosure");
    focusElements.click();
  };

  await focusElementsOnBoard({ page });

  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("text input");
  await page.waitForTimeout(1000);

  await page
    .getByTestId("inputsText Input")
    .dragTo(page.locator('//*[@id="react-flow-id"]'));
  await page.mouse.up();
  await page.mouse.down();

  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("openai");
  await page.waitForTimeout(1000);

  await page
    .getByTestId("modelsOpenAI")
    .dragTo(page.locator('//*[@id="react-flow-id"]'));
  await page.mouse.up();
  await page.mouse.down();

  await page.getByTitle("fit view").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();

  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/div[5]/button/div[1]',
    )
    .waitFor({
      state: "visible",
      timeout: 30000,
    });

  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/div[5]/button/div[1]',
    )
    .hover();
  await page.mouse.down();

  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/button/div[1]',
    )
    .waitFor({
      state: "visible",
      timeout: 30000,
    });

  // Move to the second element
  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div[3]/div/button/div[1]',
    )
    .hover();

  // Release the mouse
  await page.mouse.up();

  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("text output");

  await page
    .getByTestId("outputsText Output")
    .dragTo(page.locator('//*[@id="react-flow-id"]'));
  await page.mouse.up();
  await page.mouse.down();

  await page.getByTitle("fit view").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();

  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div[15]/button/div[1]',
    )
    .waitFor({
      state: "visible",
      timeout: 30000,
    });

  // Click and hold on the first element
  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div[15]/button/div[1]',
    )
    .hover();
  await page.mouse.down();

  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[3]/div/div[2]/div[3]/div/button/div[1]',
    )
    .waitFor({
      state: "visible",
      timeout: 30000,
    });

  // Move to the second element
  await page
    .locator(
      '//*[@id="react-flow-id"]/div/div[1]/div/div/div[2]/div[3]/div/div[2]/div[3]/div/button/div[1]',
    )
    .hover();

  // Release the mouse
  await page.mouse.up();

  if (!process.env.OPENAI_API_KEY) {
    //You must set the OPENAI_API_KEY on .env file to run this test
    expect(false).toBe(true);
  }

  await page
    .getByTestId("popover-anchor-input-input_value")
    .nth(0)
    .fill("This is a test!");

  await page
    .getByTestId("popover-anchor-input-openai_api_key")
    .fill(process.env.OPENAI_API_KEY ?? "");
  await page.getByText("Playground", { exact: true }).click();
  await page.getByText("Run Flow", { exact: true }).click();

  await page.waitForTimeout(5000);

  let textInputContent = await page
    .getByPlaceholder("Enter text...")
    .textContent();
  expect(textInputContent).toBe("This is a test!");

  await page.getByText("Outputs", { exact: true }).nth(1).click();
  await page.getByText("Text Output", { exact: true }).nth(2).click();
  let contentOutput = await page.getByPlaceholder("Enter text...").inputValue();
  expect(contentOutput).not.toBe(null);

  await page.keyboard.press("Escape");

  await page
    .getByTestId("popover-anchor-input-input_value")
    .nth(0)
    .fill("This is a test, again just to be sure!");
  await page.getByText("Playground", { exact: true }).click();
  await page.getByText("Run Flow", { exact: true }).click();

  await page.waitForTimeout(5000);

  textInputContent = await page.getByPlaceholder("Enter text...").textContent();
  expect(textInputContent).toBe("This is a test, again just to be sure!");

  await page.getByText("Outputs", { exact: true }).nth(1).click();
  await page.getByText("Text Output", { exact: true }).nth(2).click();
  contentOutput = await page.getByPlaceholder("Enter text...").inputValue();
  expect(contentOutput).not.toBe(null);
});
