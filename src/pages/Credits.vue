<script setup>
import { useRouter } from 'vue-router';
import KasparImage from '../assets/136521147.png';
import TauriImage from '../assets/47485001.png';
import MartinImage from '../assets/144675657.png';

const router = useRouter();

function goToHome() {
    router.push({ name: 'HomePage' });
}
</script>

<template>
    <h1 class="title is-size-1 has-text-weight-bold has-text-white">
        Loojad
    </h1>
    <div class="columns">
        <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img class="is-rounded" :src="MartinImage" />
                            </figure>
                        </div>
                        <div class="media-content has-text-left">
                            <p class="title is-4">Martin Pruus</p>
                            <p class="subtitle is-6">@Mart1nPr</p>
                            <a class="button is-link" href="https://github.com/Mart1nPr" target="_blank">
                                <i class="fab fa-github"></i><p class="ml-2">Github</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img class="is-rounded" :src="KasparImage" />
                            </figure>
                        </div>
                        <div class="media-content has-text-left">
                            <p class="title is-4">Kaspar Bergert</p>
                            <p class="subtitle is-6">@MasterShifuCsgo</p>
                            <a class="button is-link" href="https://github.com/MasterShifuCsgo" target="_blank"><i
                                    class="fab fa-github"></i><p class="ml-2">Github</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128">
                                <img class="is-rounded" :src="TauriImage" />
                            </figure>
                        </div>
                        <div class="media-content has-text-left">
                            <p class="title is-4">Tauri Tammela</p>
                            <p class="subtitle is-6">@markusmikk100</p>
                            <a class="button is-link" href="https://github.com/markusmikk100" target="_blank">
                                <i class="fab fa-github"></i><p class="ml-2">Github</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="button is-large is-primary mt-6 has-text-white" @click="goToHome" >Back</button>
</template>
