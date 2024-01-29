function get_posts() {
    return [
    { id: 1, author: 'biology101', content: 'What is the basic unit of life?', parent_id: null, post_type: 'definitions' },
    { id: 2, author: 'naturelover22', content: 'Why are rainforests important for biodiversity?', parent_id: null, post_type: 'definitions' },
    { id: 3, author: 'sciencegeek42', content: 'Explain the process of mitosis?', parent_id: null, post_type: 'definitions' },
    { id: 4, author: 'ecologyexpert', content: 'How do ecosystems respond to climate change?', parent_id: null, post_type: 'definitions' },
    { id: 5, author: 'chemistrywizard', content: 'What are chemical reactions?', parent_id: null, post_type: 'definitions' },
    { id: 6, author: 'animallover88', content: 'Why do birds migrate?', parent_id: null, post_type: 'explanations' },
    { id: 7, author: 'geneticsguru', content: 'What is genetic variation?', parent_id: null, post_type: 'explanations' },
    { id: 8, author: 'botanyenthusiast', content: 'How do plants adapt to different environments?', parent_id: null, post_type: 'explanations' },
    { id: 9, author: 'spaceexplorer', content: 'What is the significance of the Hubble Space Telescope?', parent_id: null, post_type: 'explanations' },
    { id: 10, author: 'microbiologist', content: 'How do bacteria develop antibiotic resistance?', parent_id: null, post_type: 'explanations' },
    { id: 11, author: 'sciencestudent1', content: 'The basic unit of life is a cell.', parent_id: 1 },
    { id: 12, author: 'biologyteacher42', content: 'Cells are the fundamental structural and functional units of all living organisms.', parent_id: 1 },
    { id: 13, author: 'researcher123', content: 'Cells are composed of various organelles, each with specific functions.', parent_id: 1 },
    { id: 21, author: 'ecologyexpert7', content: 'Rainforests support a wide variety of species, contributing to high biodiversity.', parent_id: 2 },
    { id: 22, author: 'conservationist99', content: 'Rainforests play a crucial role in maintaining ecological balance and preserving rare species.', parent_id: 2 },
    { id: 23, author: 'natureenthusiast55', content: 'The dense vegetation of rainforests provides habitat and resources for countless organisms.', parent_id: 2 },
    { id: 31, author: 'biochemist88', content: 'Mitosis is a process of cell division that results in two identical daughter cells.', parent_id: 3 },
    { id: 32, author: 'geneticsprofessor', content: 'Mitosis is essential for growth, repair, and asexual reproduction in multicellular organisms.', parent_id: 3 },
    { id: 33, author: 'cellbiologist12', content: 'Mitosis involves several stages, including prophase, metaphase, anaphase, and telophase.', parent_id: 3 },
    { id: 41, author: 'climateexpert33', content: 'Ecosystems respond to climate change through shifts in species distribution and behavior.', parent_id: 4 },
    { id: 42, author: 'environmentalist45', content: 'Climate change can disrupt food chains and affect the availability of resources in ecosystems.', parent_id: 4 },
    { id: 43, author: 'ecologyresearcher', content: 'Some species may adapt to changing conditions, while others may face extinction.', parent_id: 4 },
    { id: 51, author: 'chemstudent', content: 'Chemical reactions involve the breaking and forming of chemical bonds.', parent_id: 5 },
    { id: 52, author: 'chemistryprof', content: 'Chemical reactions are essential for all biochemical processes in living organisms.', parent_id: 5 },
    { id: 53, author: 'scienceenthusiast99', content: 'Chemical reactions can be classified into various types, such as synthesis, decomposition, and redox reactions.', parent_id: 5 },
    { id: 61, author: 'ornithologist11', content: 'Birds migrate to find warmer weather and better food sources during different seasons.', parent_id: 6 },
    { id: 62, author: 'birdwhisperer', content: 'Migratory patterns are often guided by environmental cues and innate instincts.', parent_id: 6 },
    { id: 63, author: 'birdlover123', content: 'Some birds migrate thousands of miles to reach their breeding and wintering grounds.', parent_id: 6 },
    { id: 71, author: 'geneticist87', content: 'Genetic variation refers to differences in DNA sequences among individuals within a population.', parent_id: 7 },
    { id: 72, author: 'biologyteacher', content: 'Genetic variation is the raw material for evolution and natural selection.', parent_id: 7 },
    { id: 73, author: 'researcher234', content: 'It results from mutations, genetic recombination, and gene flow.', parent_id: 7 },
    { id: 81, author: 'plantgenius', content: 'Plants adapt to different environments through mechanisms like tolerance to extreme conditions and changes in morphology.', parent_id: 8 },
    { id: 82, author: 'botanist99', content: 'Some plants exhibit phenotypic plasticity, adjusting their traits in response to environmental cues.', parent_id: 8 },
    { id: 83, author: 'ecosystemscientist', content: 'Plant adaptations are essential for their survival and reproduction in diverse habitats.', parent_id: 8 },
    { id: 91, author: 'astronomyenthusiast', content: 'The Hubble Space Telescope has provided stunning images of distant galaxies and nebulae.', parent_id: 9 },
    { id: 92, author: 'spacegeek101', content: 'It has greatly expanded our understanding of the universe, including the age and expansion rate of the cosmos.', parent_id: 9 },
    { id: 93, author: 'astrophysicist22', content: 'Hubbles observations have led to groundbreaking discoveries in astronomy and astrophysics.', parent_id: 9 },
    { id: 101, author: 'microbiologist101', content: 'Bacteria develop antibiotic resistance through genetic mutations and horizontal gene transfer.', parent_id: 10 },
    { id: 102, author: 'infectiousdiseaseexpert', content: 'Overuse and misuse of antibiotics accelerate the development of resistance in bacterial populations.', parent_id: 10 },
    { id: 103, author: 'medicalresearcher', content: 'Antibiotic resistance poses a significant challenge in healthcare and requires novel approaches to treatment.', parent_id: 10 },
  ];
  
  
}

function get_courses() {
    return ['Honors Biology', 'Geometry', 'Pre-Modern History', 'Underwater basket weaving']
}

function get_categories() {
    return ['Photos', 'Definitions', 'Explanations', 'Live Chat']
}


export {get_courses, get_posts, get_categories}

