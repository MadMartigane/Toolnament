
<script lang="ts">
    import Input from "@/components/Input.vue";
    import TeamNameTile from "@/components/TeamNameTile.vue";
    import Button from "@/components/Button.vue";

    export interface TeamModel {
        name?: string,
        id: string
    };
    export interface DiagramPoule {
        id: string,
        teams: Array<string> // TeamModel ids
    }
    export interface DiagramMatch {
        id: string,
        teams: Array<string> // TeamModel ids
        scores: Array<number>
    }
    export interface DiagramStructure {
        poule: Array<DiagramPoule>,
        match: Array<DiagramMatch>
    }

    export default {
        name: "GeneratorView",
        data () {
            return {
                displayDiagram: false,
                teamNumber: 8,
                teamList: [] as Array<TeamModel>,
                classDiagramNbColumn: {} as any,
                diagramStructure: {}
            }
        },
        methods: {
            nubmerOfTeamChanges(): void {
                console.log("[GeneratorView] teamNumber: ", this.teamNumber);
                const teamListBackup = this.teamList.map((item: TeamModel) => item);

                this.teamList.length = 0;
                for (let i=0; i < this.teamNumber; i++) {
                    this.teamList[i] = teamListBackup[i] || { name: `Team #${i}`, id: `team_${i}` };
                }
            },
            onTeamNameUpdated (teamName: string, teamId: String): void {
                console.log("[aTeamNameUpdated()] teamName: ", teamName);
                console.log("[aTeamNameUpdated()] teamId: ", teamId);

            },
            generateDiagram (): void {
                console.log("[generateDiagram()] this: ", this);
                this.displayDiagram = true;
                this.classDiagramNbColumn[`grid-cols-${ this.teamNumber / 2 + 1 }`] = true;
            }
        },
        components: {
            Button,
            Input,
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
                        <Button
                                @:click="generateDiagram()"
                                text="Génération !"
                                variant="primary" />
                        <Button
                                text="Génération 2 !"
                                variant="secondary" />
                    </div>

                </form>
            </div>

            <div class="block-container">
                <Input
                        v-for="team in teamList"
                        :value="team.name"
                        :id="team.id"
                        @update:value="onTeamNameUpdated"
                        />
            </div>
        </div>

        <!-- diagram container -->
        <div
                :class="classDiagramNbColumn"
                v-if="displayDiagram"
                class="grid gap-4 block-container">
            <div
                    v-if="displayDiagram"
                    class="tile-column">
                <div
                        v-for="team in teamList">
                    <TeamNameTile
                            :name="team.name"
                            />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
