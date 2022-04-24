<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot>
                    <a href="/">Login</a>
                    <br/>
                    <button @click="displayDashboard">Dashboard</button>
                    <ProfileCard/>
                </slot>
                
            </div>
        </transition>
    </div>
</template>
<script>
import ProfileCard from '../cards/ProfileCard.vue'
import router from '../../router/router'
    export default {

        data: () => ({
            isPanelOpen: true
        }),
        methods: {
            closeSidebarPanel(){
                this.isPanelOpen = !this.isPanelOpen
            },

            displayDashboard(){
                router.push('/')
            }
        },
        components: {
            ProfileCard,
        }
    }
</script>
<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }
    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }
    .sidebar-backdrop {
        background-color: rgba(239, 239, 241, 0.4);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }
</style>