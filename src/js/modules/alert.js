class Alert {
    constructor() {
        this.alertsData = [];
    }

    async fetchAlerts() {
        try {
            const response = await fetch("/json/alerts.json"); // Ensure the path is correct
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            this.alertsData = await response.json();
        } catch (error) {
            console.error("Error loading alerts:", error);
        }
    }

    async renderAlerts() {
        await this.fetchAlerts();
        
        if (!this.alertsData || this.alertsData.length === 0) return;

        const alertSection = document.createElement("section");
        alertSection.className = "alert-list";

        this.alertsData.forEach(alert => {
            const alertItem = document.createElement("p");
            alertItem.textContent = alert.message;
            alertItem.style.backgroundColor = alert.background;
            alertItem.style.color = alert.color;
            alertSection.appendChild(alertItem);
        });

        const mainElement = document.querySelector("main");
        if (mainElement) {
            mainElement.prepend(alertSection);
        }
    }
}

export default Alert;
