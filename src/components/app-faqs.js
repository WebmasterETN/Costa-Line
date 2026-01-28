class AppFaqs extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute("title") || "Preguntas Frecuentes";
		const faqsData = this.getAttribute("faqs");
		let faqs = [];

		try {
			if (faqsData) {
				faqs = JSON.parse(faqsData);
			}
		} catch (e) {
			console.error("Error parsing FAQs:", e);
		}

		this.innerHTML = `
      <section class="faq-section">
        <h2 class="__section-title">${title}</h2>
        <article class="faq-list">
          ${faqs.map((faq) => `
            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">${faq.question}</span>
                <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
              </summary>
              <p class="faq-item__answer">${faq.answer}</p>
            </details>
          `,).join("")}
        </article>
      </section>
    `;
	}
}
customElements.define("app-faqs", AppFaqs);
