import { expect, test } from "@playwright/test";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import path from "path";

test("user must interact with chat with Input/Output", async ({ page }) => {
  if (!process.env.CI) {
    dotenv.config({ path: path.resolve(__dirname, "../../.env") });
  }

  await page.goto("/");

  await page.waitForTimeout(1000);

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

  await page.getByRole("heading", { name: "Basic Prompting" }).click();
  await page.waitForTimeout(1000);

  await page.getByTitle("fit view").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();

  if (!process.env.OPENAI_API_KEY) {
    //You must set the OPENAI_API_KEY on .env file to run this test
    expect(false).toBe(true);
  }

  await page
    .getByTestId("popover-anchor-input-openai_api_key")
    .fill(process.env.OPENAI_API_KEY ?? "");
  await page.getByText("Playground", { exact: true }).click();
  await page.getByPlaceholder("Send a message...").fill("Hello, how are you?");
  await page.getByTestId("icon-LucideSend").click();
  let valueUser = await page.getByTestId("sender_name_user").textContent();

  await page.waitForSelector('[data-testid="sender_name_ai"]', {
    timeout: 100000,
  });

  let valueAI = await page.getByTestId("sender_name_ai").textContent();

  expect(valueUser).toBe("User");
  expect(valueAI).toBe("AI");

  await page.keyboard.press("Escape");

  await page
    .getByTestId("textarea-input_value")
    .nth(0)
    .fill(
      "testtesttesttesttesttestte;.;.,;,.;,.;.,;,..,;;;;;;;;;;;;;;;;;;;;;,;.;,.;,.,;.,;.;.,~~çççççççççççççççççççççççççççççççççççççççisdajfdasiopjfaodisjhvoicxjiovjcxizopjviopasjioasfhjaiohf23432432432423423sttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestççççççççççççççççççççççççççççççççç,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,!",
    );
  await page.getByText("Playground", { exact: true }).last().click();
  await page.getByTestId("icon-LucideSend").click();
  await page.getByText("Close", { exact: true }).click();
  await page.getByText("Chat Input", { exact: true }).click();
  await page.getByTestId("advanced-button-modal").click();
  await page.getByTestId("showsender_name").click();
  await page.getByText("Save Changes", { exact: true }).click();

  await page.getByText("Chat Output", { exact: true }).click();
  await page.getByTestId("advanced-button-modal").click();
  await page.getByTestId("showsender_name").click();
  await page.getByText("Save Changes", { exact: true }).click();

  await page
    .getByTestId("popover-anchor-input-sender_name")
    .nth(1)
    .fill("TestSenderNameUser");
  await page
    .getByTestId("popover-anchor-input-sender_name")
    .nth(0)
    .fill("TestSenderNameAI");

  await page.getByText("Playground", { exact: true }).last().click();
  await page.getByTestId("icon-LucideSend").click();

  valueUser = await page
    .getByTestId("sender_name_testsendernameuser")
    .textContent();
  valueAI = await page
    .getByTestId("sender_name_testsendernameai")
    .textContent();

  expect(valueUser).toBe("TestSenderNameUser");
  expect(valueAI).toBe("TestSenderNameAI");

  expect(
    await page
      .getByText(
        "testtesttesttesttesttestte;.;.,;,.;,.;.,;,..,;;;;;;;;;;;;;;;;;;;;;,;.;,.;,.,;.,;.;.,~~çççççççççççççççççççççççççççççççççççççççisdajfdasiopjfaodisjhvoicxjiovjcxizopjviopasjioasfhjaiohf23432432432423423sttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestççççççççççççççççççççççççççççççççç,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,!",
        { exact: true },
      )
      .isVisible(),
  );
});

test("user must be able to see output inspection", async ({ page }) => {
  if (!process.env.CI) {
    dotenv.config({ path: path.resolve(__dirname, "../../.env") });
  }

  await page.goto("/");

  await page.waitForTimeout(1000);

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

  await page.getByRole("heading", { name: "Basic Prompting" }).click();
  await page.waitForTimeout(1000);

  await page.getByTitle("fit view").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();

  if (!process.env.OPENAI_API_KEY) {
    //You must set the OPENAI_API_KEY on .env file to run this test
    expect(false).toBe(true);
  }

  await page
    .getByTestId("popover-anchor-input-openai_api_key")
    .fill(process.env.OPENAI_API_KEY ?? "");

  await page.getByTestId("button_run_chat output").last().click();

  await page.waitForTimeout(5000);

  await page.waitForSelector('[data-testid="icon-ScanEye"]', {
    timeout: 30000,
  });

  await page.getByTestId("icon-ScanEye").nth(4).click();

  await page.getByText("Sender", { exact: true }).isVisible();
  await page.getByText("Type", { exact: true }).isVisible();
  await page.getByText("User", { exact: true }).last().isVisible();
});

test("user must be able to send an image on chat", async ({ page }) => {
  if (!process.env.CI) {
    dotenv.config({ path: path.resolve(__dirname, "../../.env") });
  }

  await page.goto("/");

  await page.waitForTimeout(1000);

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

  await page.getByRole("heading", { name: "Basic Prompting" }).click();
  await page.waitForTimeout(1000);

  await page.getByTitle("fit view").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();
  await page.getByTitle("zoom out").click();

  if (!process.env.OPENAI_API_KEY) {
    //You must set the OPENAI_API_KEY on .env file to run this test
    expect(false).toBe(true);
  }

  await page
    .getByTestId("popover-anchor-input-openai_api_key")
    .fill(process.env.OPENAI_API_KEY ?? "");

  await page.getByText("Chat Input", { exact: true }).click();
  await page.getByTestId("more-options-modal").click();
  await page.getByTestId("edit-button-modal").click();
  await page.getByText("Save Changes").click();

  await page.getByText("Playground", { exact: true }).click();

  // Read the image file as a binary string
  const filePath = "tests/end-to-end/assets/chain.png";
  const fileContent = readFileSync(filePath, "base64");

  // Create the DataTransfer and File objects within the browser context
  const dataTransfer = await page.evaluateHandle(
    ({ fileContent }) => {
      const dt = new DataTransfer();
      const byteCharacters = atob(fileContent);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const file = new File([byteArray], "chain.png", { type: "image/png" });
      dt.items.add(file);
      return dt;
    },
    { fileContent },
  );

  // Locate the target element
  const element = await page.getByPlaceholder("Send a message...");

  // Dispatch the drop event on the target element
  await element.dispatchEvent("drop", { dataTransfer });

  await page.waitForTimeout(4000);

  await page.getByText("chain.png").isVisible();
  await page.getByTestId("icon-LucideSend").click();
  await page.waitForTimeout(2000);
  await page.getByText("chain.png").isVisible();

  await page.getByText("Close", { exact: true }).click();

  await page.waitForSelector('[data-testid="icon-ScanEye"]', {
    timeout: 30000,
  });

  await page.getByTestId("icon-ScanEye").nth(4).click();
  await page.getByText("Restart").isHidden();
});
