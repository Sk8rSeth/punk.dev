

<div class="main-content-area">
    <div class="main-content-container punkcard">
        <div class="punkcard-content">
            <div class="inner-container">
                <h2 class="section-title">//About-Us</h2>
                <div class="content-area">
                   
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .main-content-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    }

    .content-area {
    flex-grow: 1;
    }

    @media (min-width: 769px) {
        .main-content-area {
            grid-column: 1 / 25;
            grid-row: 2 / 4;
        }

    }

    @media (max-width: 768px) {
        .main-content-area {
            grid-column: 1;
            grid-row: 2 / 6;
        }
    }
</style>