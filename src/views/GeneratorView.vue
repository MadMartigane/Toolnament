
<script lang="ts">
    import TeamNameInput from "@/components/TeamNameInput.vue";
import TeamNameTile from "@/components/TeamNameTile.vue";

    export interface TeamModel {
        name: string,
        id: number
    };

    export default {
        name: "GeneratorView",
        data () {
            return {
                displayDiagram: false,
                teamNumber: 16,
                teamList: [] as Array<TeamModel>
            }
        },
        methods: {
            nubmerOfTeamChanges(): void {
                console.log("[GeneratorView] teamNumber: ", this.teamNumber);
                const teamListBackup = this.teamList.map((item: TeamModel) => item);

                this.teamList.length = 0;
                for (let i=0; i < this.teamNumber; i++) {
                    this.teamList[i] = teamListBackup[i] || { name: `Team #${i}`, id: i };
                }
            },

            generateDiagram (): void {
                console.log("generator()");
                this.displayDiagram = true;
            }
        },
        components: {
            TeamNameInput,
            TeamNameTile
        },
        mounted() {
            this.nubmerOfTeamChanges();
        }
    };
</script>


<template>
    <div class="h-screen">
        <div class="main-container">
            <div class="block-container">
                <form action="" method="" class="form-main">

                    <div class="form-element">
                        <label for="teamNumber">Nombre d'équipe:</label>
                        <input
                                v-model="teamNumber"
                                @input=nubmerOfTeamChanges()
                                class="input-element"
                                min="0"
                                max="32"
                                type="number"
                                step="2"
                                name="teamNumber"
                                id="form-team-number"
                                required>
                    </div>

                    <div class="flex justify-center">
                        <button
                                @:click="generateDiagram()"
                                type="button"
                                class="btn-primary">Génération !</button>
                        <button
                                type="button"
                                class="btn-secondary">Génération 2 !</button>
                    </div>

                </form>
            </div>

            <div class="block-container">
                <TeamNameInput
                        v-for="team in teamList"
                        :name="team.name"
                        :id="team.id"
                        />
            </div>
        </div>

        <!-- diagram container -->
        <div
                v-if="displayDiagram"
                class="tile-container">
                    <TeamNameTile
                        v-for="team in teamList"
                        :name="team.name"
                        />


        </div>

    </div>
</template>

<style>
</style>
