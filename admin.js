document.addEventListener('DOMContentLoaded', function () {
    const salesChart = new Chart(document.getElementById('salesChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales ($)',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: '#4361ee',
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    setInterval(() => {
        const stats = document.querySelectorAll('.stat-card .count');
        stats.forEach(stat => {
            const currentValue = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const change = Math.floor(Math.random() * 100) - 50;
            const newValue = Math.max(0, currentValue + change);

            if (stat.parentElement.querySelector('.fa-dollar-sign')) {
                stat.textContent = '$' + newValue.toLocaleString();
            } else {
                stat.textContent = newValue.toLocaleString();
            }
        });
    }, 10000);

    setInterval(() => {
        const badge = document.querySelector('.notification-badge');
        const currentCount = parseInt(badge.textContent);
        badge.textContent = currentCount + 1;

        const activityList = document.querySelector('.activity-list');
        const newActivity = document.createElement('div');
        newActivity.className = 'activity-item mb-3';
        newActivity.innerHTML = `
                    <div class="d-flex">
                        <div class="flex-shrink-0">
                            <i class="fas fa-bell text-warning"></i>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <p class="mb-0">New notification</p>
                            <small class="text-muted">Just now</small>
                        </div>
                    </div>
                `;
        activityList.prepend(newActivity);

        if (activityList.children.length > 4) {
            activityList.removeChild(activityList.lastChild);
        }
    }, 15000);
});