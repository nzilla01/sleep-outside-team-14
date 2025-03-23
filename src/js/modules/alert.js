class Alert {
    constructor() {
        this.alertsData = [];
        // Initialize as empty
    }

    // Function to fetch and store alerts
    async fetchAlerts() {
        try {
            const response = await fetch('/json/alerts.json');
            // Public folder is accessible via /
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            this.alertsData = await response.json();
        } catch (error) {
            console.error('Error loading alerts:', error);
        }
    }

    // Function to display alerts on the page
    async renderAlerts() {
        await this.fetchAlerts();
        // Ensure data is fetched before rendering

        if (!this.alertsData || this.alertsData.length === 0)
            return;

        const alertSection = document.createElement('section');
        alertSection.className = 'alert-list';

        this.alertsData.forEach(alert => {
            const alertItem = document.createElement('p');
            alertItem.textContent = alert.message;
            alertItem.style.backgroundColor = alert.background;
            alertItem.style.color = alert.color;
            alertSection.appendChild(alertItem);
        }
        );

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.prepend(alertSection);
        }
    }
}

// Export the class as default
export default Alert;