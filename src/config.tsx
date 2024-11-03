import { Icons } from '@/components/icons'

type Config = {
    name: string
    avatar: string
    title: string
    siteUrl: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    getInTouch?: string
    description: string | JSX.Element
    descriptionRaw: string
    projects: {
        name: string
        icon?: keyof typeof Icons
        image?: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
    }[]
}

export const CONFIG: Config = {
    name: 'Princy H. Randimbimanana',
    avatar: '/images/profile.jpg',
    title: 'IT Student | Web Marketing | Web Developer | Automation',
    siteUrl: '#',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/RHPrincy',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/randimbimanana-princy-52b0a9257/',
            icon: 'linkedin',
        },
        {
            name: 'Facebook',
            url: 'https://web.facebook.com/Princy.Randimbimanana',
            icon: 'facebook',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/princy_rh/',
            icon: 'instagram',
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/+261375020345',
            icon: 'whatsapp',
        },
        {
            name: 'X',
            url: 'https://x.com/princy_rh',
            icon: 'x',
        },
        {
            name: 'Email',
            url: 'mailto:randimbimananaprincy@gmail.com',
            icon: 'email',
        },
    ],
    getInTouch: 'Buy me a coffee',
    description: (
        <> Welcome, I am <b>Princy RANDIMBIMANANA</b> 👋 <br/> 
        - A Computer Science student at the {' '} <a href='https://mit.univ-antananarivo.mg/' target='_blank' className='whitespace-nowrap font-medium text-foreground underline decoration-muted-foreground underline-offset-2' > MISA <Icons.arrowUpRight className='inline-block size-4 mb-5' /> </a> <br/> 
        - A web enthusiast, passionate about development and creating captivating digital experiences &#127756; <br /> 
        - Also passionate about video games &#127918; <br /> 
        - Automation enthusiast &#129302;
        </>
    ),
    descriptionRaw: `Un web enthousiaste, passionn&eacute; par le d&eacute;veloppement et la cr&eacute;ation d’exp&eacute;riences num&eacute;riques qui captivant. Passionn&eacute; pour les jeux vid&eacute;o &#128513; Un adepte de l’automatisation.`,
    projects: [
        {
            name: 'Ongoing Project',
            image: '/images/onready.png',
            description:
                'Ongoing Project',
            url: '#',
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Next', icon: 'next' },
            ],
            featured: true,
        },
        // {
        //     name: 'Onready',
        //     image: '/images/onready.png',
        //     description:
        //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore, hic neque quibusdam provident accusamus quo quidem, ratione obcaecati explicabo aliquid, nobis laboriosam optio recusandae doloribus? Vel quam reiciendis facilis?.',
        //     url: '#',
        //     tags: [
        //         { name: 'React', icon: 'react' },
        //         { name: 'TypeScript', icon: 'typescript' },
        //         { name: 'Tailwind CSS', icon: 'tailwindcss' },
        //     ],
        //     featured: true,
        //     testimonial:
        //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aperiam, voluptatem reiciendis tempore velit accusamus rerum eligendi et voluptatibus ex vel ad provident voluptate quasi debitis. Doloribus sunt temporibus voluptatibus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aperiam, voluptatem reiciendis tempore velit accusamus rerum eligendi et voluptatibus ex vel ad provident voluptate quasi debitis. Doloribus sunt temporibus voluptatibus!',
        // },
        // {
        //     name: 'Onready',
        //     image: '/images/onready.png',
        //     description:
        //         'lorem ipsum',
        //     url: '#',
        //     tags: [
        //         { name: 'TypeScript', icon: 'typescript' },
        //         { name: 'Tailwind CSS', icon: 'tailwindcss' },
        //         { name: 'Next', icon: 'next' },
        //     ],
        //     featured: true,
        //     github: 'https://github.com/#',
        // },
    ],
}
