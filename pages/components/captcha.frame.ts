import { expect } from '@playwright/test';
import { BasePage } from '../base.page';

export class CaptchaFrame extends BasePage {
	private readonly frame = {
		captchaFrame: this.page.locator('//iframe[@title="reCAPTCHA"]'),
	};

	public async waitCaptchaFrameIsDisplayed() {
		await this.frame.captchaFrame.waitFor({ state: 'visible' });
	}

	public async validateCaptchIsDisplayed() {
		await expect(this.frame.captchaFrame).toBeVisible();
	}
}
