<template>
    <div class="h-screen">
        <div class="main-container">
            <div class="block-container">
                <form action="" method="" class="form-main">

                    <div class="form-element">
                        <label for="teamNumber">Nombre d'équipe: </label>
                        <input
                                class="input-element"
                                min="0"
                                max="32"
                                type="number"
                                value="32"
                                step="2"
                                name="teamNumber"
                                id="form-team-number"
                                required>
                    </div>

                    <div class="flex justify-center">
                        <button class="btn-primary">Génération !</button>
                        <button class="btn-secondary">Génération 2 !</button>
                    </div>

                </form>
            </div>

            <div class="block-container">
                <div id="form-team-container"></div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
