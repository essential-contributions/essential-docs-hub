<!-- docs/.vitepress/components/ExternalContent.vue -->
<template>
    <div v-if="loading" class="loading">Loading content...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else v-html="filteredContent" class="content"></div>
  </template>
  
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const props = defineProps<{
  url: string,
  selector: string,
  subSelector?: string // Optional sub-selector for nested content
}>();

  
  const loading = ref(true)
  const error = ref<string | null>(null)
  const filteredContent = ref<string | null>(null)
  
  const fetchAndFilterContent = async () => {
    try {
        const response = await fetch(props.url, { method: 'GET', mode: 'cors' });
        if (!response.ok) throw new Error(`Failed to load content: ${response.statusText}`);
        
        // Parse the HTML response
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(await response.text(), 'text/html');
        let element = htmlDocument.querySelector(props.selector);
        
        // If subSelector is provided, filter within the main selector
        if (element && props.subSelector) {
        element = element.querySelector(props.subSelector);
        }
        
        if (element) {
        // Initialize filtered content with the header's HTML
        let contentHtml = element.outerHTML;
        
        // Capture all sibling elements until the next header or the end of section
        let sibling = element.nextElementSibling;
        while (sibling && !sibling.matches('h2, h3, h4, h5, h6')) { // Adjust header tags as needed
            contentHtml += sibling.outerHTML;
            sibling = sibling.nextElementSibling;
        }

        // Remove all anchor tags if needed
        const wrapper = document.createElement('div');
        wrapper.innerHTML = contentHtml;
        wrapper.querySelectorAll('a').forEach(anchor => anchor.replaceWith(anchor.textContent || ''));
        
        filteredContent.value = wrapper.innerHTML;
        } else {
        filteredContent.value = `<p>Content not found</p>`;
        }
    } catch (err) {
        error.value = 'Failed to load content. Please try again later.';
        console.error('Error fetching content:', err);
    } finally {
        loading.value = false;
    }
  };
  
  onMounted(() => fetchAndFilterContent())
  </script>
  
  <style scoped>
  .loading, .error, .content {
    padding: 1em;
    font-family: Arial, sans-serif;
  }
  .loading {
    color: #888;
  }
  .error {
    color: red;
  }
  .content {
    /* Optional styling for the content area */
  }
  </style>
  