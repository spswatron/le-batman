class RadarChart {
    constructor(parent, data, title = "") {
        this.container = document.createElement('div');
        this.container.className = "radar-container"
        this.canvas = document.createElement('CANVAS');
        this.title = document.createElement('H1');
        let titleText = document.createTextNode(title);
        this.title.appendChild(titleText);
        if (parent)
            this.parent = parent;
        else
            this.parent = document;
        
        this.container.appendChild(this.title);
        this.container.appendChild(this.canvas);
        this.parent.appendChild(this.container);

        this.ctx = this.canvas.getContext('2d');
        this.chart = this.drawChart(this.ctx, data);
    }

    drawChart(ctx, data) {
        return new Chart(ctx, {
            type: 'radar',
            data: data,
            responsive: true,
            maintainAspectRatio: false,
            options: {
                defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Poppins'",
                elements: {
                    line: {
                      borderWidth: 3
                    }
                }
            },
        });
    }

    update() {
        this.chart.update();
    }


}