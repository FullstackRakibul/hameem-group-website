<template>
  <div
    class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
    <!-- Cover Image -->
    <div class="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800">
      <img v-if="contact.coverImage" :src="contact.coverImage" alt="Cover" class="w-full h-full object-cover" />
      <div v-else class="w-full h-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
    </div>

    <!-- Profile Section -->
    <div class="relative px-6 pb-6">
      <!-- Profile Image -->
      <div class="flex justify-center -mt-16 mb-4">
        <div class="relative">
          <div class="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
            <img v-if="contact.profileImage" :src="contact.profileImage" alt="Profile"
              class="w-full h-full object-cover" />
            <div v-else class="w-full h-full bg-gray-300 flex items-center justify-center">
              <Icon name="fa6-solid:user" class="w-8 h-8 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <!-- Name -->
      <h3 class="text-xl font-bold text-center text-gray-900 mb-1">
        {{ contact.name }}
      </h3>

      <!-- Designation and Company -->
      <p class="text-gray-600 text-center text-sm mb-2">
        {{ contact.designation }}
      </p>
      <p class="text-primary text-center text-sm font-semibold mb-4">
        {{ contact.company }}
      </p>

      <!-- Social Icons -->
      <div class="flex justify-center gap-3 mb-4">
        <button v-for="(social, index) in contact.socialLinks" :key="index"
          class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
          :title="social.name">
          <Icon :name="social.icon" class="w-4 h-4" />
        </button>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-4">
        <!-- Contact Button -->
        <button @click="handleContact"
          class="flex-1 bg-[#274257] text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-[#1a3246] transition-colors duration-200 flex items-center justify-center gap-2">
          <Icon name="fa6-solid:phone" class="w-4 h-4" />
          Contact
        </button>

        <!-- vCard Download Button -->
        <button @click="saveContact" :disabled="isSavingContact"
          class="flex-1 border border-[#274257] text-[#274257] py-2 px-4 rounded-lg font-semibold text-sm hover:bg-[#274257] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50">
          <Icon :name="isSavingContact ? 'svg-spinners:270-ring' : 'fa6-solid:download'" class="w-4 h-4" />
          {{ isSavingContact ? 'Saving...' : 'vCard' }}
        </button>
      </div>

      <!-- Contact Info -->
      <div class="space-y-2">
        <div v-for="(info, index) in contact.contactInfo" :key="index"
          class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0">
            <Icon :name="info.icon" class="w-4 h-4" />
          </div>
          <a :href="info.href" class="text-gray-700 text-sm flex-1 hover:text-blue-600 transition-colors duration-200"
            :target="info.type === 'website' ? '_blank' : '_self'"
            :rel="info.type === 'website' ? 'noopener noreferrer' : ''">
            {{ info.text }}
          </a>
        </div>
      </div>

      <!-- Success/Error Message -->
      <div v-if="saveContactMessage" class="mt-3">
        <p class="text-xs font-medium px-3 py-2 rounded-lg text-center" :class="saveContactMessage.type === 'success'
          ? 'bg-green-100 text-green-800 border border-green-200'
          : 'bg-red-100 text-red-800 border border-red-200'">
          {{ saveContactMessage.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface ContactInfo {
  type: string;
  icon: string;
  text: string;
  href: string;
}

interface ContactCardProps {
  contact: {
    id?: string;
    name: string;
    designation: string;
    company: string;
    coverImage?: string;
    profileImage?: string;
    email: string;
    phone: string;
    website: string;
    profilePage?: string;
    socialLinks?: SocialLink[];
    contactInfo?: ContactInfo[];
  };
}

const props = defineProps<ContactCardProps>();

const isSavingContact = ref(false);
const saveContactMessage = ref<{ text: string; type: 'success' | 'error' } | null>(null);

// Default social links if not provided
const defaultSocialLinks: SocialLink[] = [
  { name: 'Email', icon: 'fa6-solid:envelope', url: `mailto:${props.contact.email}` },
  { name: 'Phone', icon: 'fa6-solid:phone', url: `tel:${props.contact.phone}` },
  { name: 'Website', icon: 'ic:baseline-web', url: props.contact.website },
];

// Default contact info if not provided
const defaultContactInfo: ContactInfo[] = [
  {
    type: 'email',
    icon: 'fa6-solid:envelope',
    text: props.contact.email,
    href: `mailto:${props.contact.email}`
  },
  {
    type: 'phone',
    icon: 'fa6-solid:phone',
    text: props.contact.phone,
    href: `tel:${props.contact.phone}`
  },
  {
    type: 'website',
    icon: 'ic:baseline-web',
    text: props.contact.website.replace(/^https?:\/\//, ''),
    href: props.contact.profilePage || props.contact.website
  }
];

// Use provided data or defaults
const contactData = computed(() => ({
  ...props.contact,
  socialLinks: props.contact.socialLinks || defaultSocialLinks,
  contactInfo: props.contact.contactInfo || defaultContactInfo
}));

const handleContact = () => {
  // You can implement contact logic here
  // For example, open a contact modal or trigger a phone call
  window.location.href = `tel:${contactData.value.phone}`;
};

const saveContact = async () => {
  if (isSavingContact.value) return;

  isSavingContact.value = true;
  saveContactMessage.value = null;

  try {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.value.name}
N:${contactData.value.name.split(' ')[1] || ''};${contactData.value.name.split(' ')[0] || ''};;;
ORG:${contactData.value.company}
TITLE:${contactData.value.designation}
TEL;TYPE=CELL:${contactData.value.phone}
EMAIL;TYPE=WORK:${contactData.value.email}
URL:${contactData.value.website}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/x-vcard' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${contactData.value.name.replace(/\s+/g, '_')}.vcf`;
    link.click();

    window.URL.revokeObjectURL(url);

    saveContactMessage.value = {
      text: 'Contact saved successfully! Check your downloads.',
      type: 'success'
    };

  } catch (error) {
    console.error('Error saving contact:', error);
    saveContactMessage.value = {
      text: 'Failed to save contact. Please try again.',
      type: 'error'
    };
  } finally {
    isSavingContact.value = false;
    setTimeout(() => {
      saveContactMessage.value = null;
    }, 5000);
  }
};
</script>

<style scoped>
.text-primary {
  color: #1857a3;
}
</style>