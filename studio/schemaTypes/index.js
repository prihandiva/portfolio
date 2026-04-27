export const schemaTypes = [
  {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'title', title: 'Job Title', type: 'string' },
      { name: 'about', title: 'About Me', type: 'text' },
      { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    ]
  },
  {
    name: 'education',
    title: 'Education & Experience',
    type: 'document',
    fields: [
      { name: 'degree', title: 'Degree / Title', type: 'string' },
      { name: 'institution', title: 'Institution / Company', type: 'string' },
      { name: 'gpa', title: 'GPA', type: 'string' },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: [
            { title: 'Education', value: 'education' },
            { title: 'Experience', value: 'experience' },
            { title: 'Course', value: 'course' }
          ]
        }
      }
    ]
  },
  {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      { name: 'title', title: 'Project Title', type: 'string' },
      { name: 'tech', title: 'Technologies Used', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'link', title: 'Main Link (GitHub/Drive)', type: 'url' },
      { name: 'demoLink', title: 'Demo Link', type: 'url' },
      { name: 'image', title: 'Project Image', type: 'image', options: { hotspot: true } },
      { 
        name: 'color', 
        title: 'Theme Color', 
        type: 'string',
        options: { list: ['blue', 'purple', 'pink', 'navy'] }
      }
    ]
  },
  {
    name: 'softSkill',
    title: 'Soft Skill',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'image', title: 'Skill Image', type: 'image', options: { hotspot: true } },
    ]
  },
  {
    name: 'organization',
    title: 'Organization',
    type: 'document',
    fields: [
      { name: 'name', title: 'Organization Name', type: 'string' },
      { name: 'roles', title: 'Roles', type: 'array', of: [{type: 'string'}] },
      { name: 'image', title: 'Organization Image', type: 'image', options: { hotspot: true } },
    ]
  }
]
