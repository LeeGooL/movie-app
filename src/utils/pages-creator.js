export function createPages(pages, pagesCount, currentPage) {
	if (pagesCount > 5) {
		if (currentPage === 1) {
			for (let i = currentPage; i <= currentPage + 2; i++) {
				pages.push(i);
			}
		} else if (currentPage === 2) {
			for (let i = currentPage - 1; i <= currentPage + 2; i++) {
				pages.push(i);
			}
		} else {
			for (let i = currentPage - 2; i <= currentPage + 2; i++) {
				if (i === 0 || i === -1 || i === -2) break;
				pages.push(i);

				if (i === pagesCount) break;
			}
		}
	}
}
