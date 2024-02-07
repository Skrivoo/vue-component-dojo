// eslint-disable-next-line no-undef
const {test, expect} = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

const todoItems = [
  'make a dojo',
  'brush my teeth',
  'go out to have a beer'
];

test.describe('New Todo', () => {
  test('add one todo item', async ({page}) => {
    const newTodoTextBox = page.getByPlaceholder('Type text here');

    await newTodoTextBox.fill(todoItems[0]);
    await newTodoTextBox.press('Enter');

    const firstItem = page.locator(`li:has-text("${todoItems[0]}")`);
    await expect(firstItem, {}).toHaveText([
      todoItems[0]
    ]);
  });

  test('add more todo items', async ({page}) => {
    const newTodoTextBox = page.getByPlaceholder('Type text here');

    await newTodoTextBox.fill(todoItems[0]);
    await newTodoTextBox.press('Enter');

    await newTodoTextBox.fill(todoItems[1]);
    await newTodoTextBox.press('Enter');

    const list = page.locator('ul');
    await expect(list, {}).toHaveText([
      `${todoItems[0]} ${todoItems[1]} `
    ]);
  });

  test('delete items button', async ({page}) => {
    const newTodoTextBox = page.getByPlaceholder('Type text here');

    await newTodoTextBox.fill(todoItems[0]);
    await newTodoTextBox.press('Enter');

    await newTodoTextBox.fill(todoItems[1]);
    await newTodoTextBox.press('Enter');

    await page.locator('button:has-text("Clear TODO")').click();

    const emptyList = page.locator('ul');
    await expect(emptyList, {}).toHaveText(['']);
  });

  test('check an item as done', async ({page}) => {
    const newTodoTextBox = page.getByPlaceholder('Type text here');

    await newTodoTextBox.fill(todoItems[0]);
    await newTodoTextBox.press('Enter');

    await newTodoTextBox.fill(todoItems[2]);
    await newTodoTextBox.press('Enter');

    const firstItem = page.locator(`li:has-text("${todoItems[0]}")`);
    await firstItem.getByRole('checkbox').check();

    await expect(firstItem).toHaveClass('done', { timeout: 1000 });
    await expect(page.locator(`li:has-text("${todoItems[2]}")`)).not.toHaveClass('done', { timeout: 1000 });
  });

});
