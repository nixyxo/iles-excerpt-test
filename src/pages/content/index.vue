<script setup lang="ts">
const content = useDocuments('~/pages/content')
</script>

<template>
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <h1>Example Content</h1>
        <div v-for="item in content" :key="item.href" >
            <h2><a :href="href">{{ item.title }}</a></h2>
            <p>
                <b>item.excerpt:</b>
                {{ item.excerpt }}
            </p>
            <p>
                <b>item.meta.excerpt:</b>
                {{ item.meta.excerpt }}
            </p>
            <pre>
                {{ item }}
            </pre>
        </div>
    </div>
</template>