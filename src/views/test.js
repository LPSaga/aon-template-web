

var API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZS1kZW1vIiwKICAgICJpYXQiOiAxNjQxNzY5MjAwLAogICAgImV4cCI6IDE3OTk1MzU2MDAKfQ.DaYlNEoUrrEn2Ig7tqibS-PHK5vgusbcbo7X36XVt4Q"



import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "http://43.198.54.207:8000"
const supabaseKey = API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function insert_data() {
    let data = [
        {
            "title":"Consensus",
            "image": "Consensus_large_conference_hall.png",
            "prompt": "large conference hall, podium with speaker, blockchain logos, tech booths, audience with notebooks, high-energy atmosphere"
        },
        {
            "title":"ETHDenver",
            "image": "ETHDenver_tech_conference_venue.png",
            "prompt": "tech conference venue, Ethereum logos, coding workshops, networking areas, blockchain enthusiasts, creative vibe"
        },
        {
            "title":"Devcon",
            "image": "Devcon_international_conference_center.png",
            "prompt": "international conference center, keynote speakers, blockchain presentations, developer discussions, Ethereum branding, collaborative environment"
        },
        {
            "title":"Y Combinator",
            "image": "Y_Combinator_modern_office_space.png",
            "prompt": "modern office space, startup founders, mentorship sessions, whiteboards with ideas, funding pitches, innovation-driven atmosphere"
        },
        {
            "title":"Techstars",
            "image": "Techstars_dynamic_workspace.png",
            "prompt": "dynamic workspace, startup teams collaborating, mentor interactions, pitch decks, brainstorming sessions, entrepreneurial spirit"
        },
        {
            "title":"500 Startups",
            "image": "500_Startups_vibrant_office.png",
            "prompt": "vibrant office, diverse startup teams, accelerator programs, investor meetings, creative discussions, high-energy environment"
        },
        {
            "title":"WeWork",
            "image": "WeWork_stylish_co-working_space.png",
            "prompt": "stylish co-working space, shared desks, communal lounge, coffee bar, collaborative meetings, modern decor"
        },
        {
            "title":"Spaces",
            "image": "Spaces_contemporary_office_design.png",
            "prompt": "contemporary office design, open work areas, comfortable seating, networking events, shared amenities, inspiring workspace"
        },
        {
            "title":"Impact Hub",
            "image": "Impact_Hub_eco-friendly_co-working_space.png",
            "prompt": "eco-friendly co-working space, social entrepreneurs, collaborative projects, networking lounge, sustainable design, innovative community"
        },
        {
            "title":"Google HQ",
            "image": "Google_HQ_futuristic_campus.png",
            "prompt": "futuristic campus, Google logo, modern workspaces, employee lounges, advanced tech labs, innovative culture"
        },
        {
            "title":"Facebook HQ",
            "image": "Facebook_HQ_high-tech_office_complex.png",
            "prompt": "high-tech office complex, Facebook logo, collaborative work areas, social spaces, cutting-edge technology, creative environment"
        },
        {
            "title":"Amazon HQ",
            "image": "Amazon_HQ_sprawling_tech_campus.png",
            "prompt": "sprawling tech campus, Amazon logo, bustling offices, research labs, employee amenities, innovation hub"
        },
        {
            "title":"MIT",
            "image": "MIT_iconic_campus_building.png",
            "prompt": "iconic campus buildings, research labs, students and professors, books and laptops, academic discussions, innovation-focused atmosphere"
        },
        {
            "title":"Stanford University",
            "image": "Stanford_University_picturesque_campus.png",
            "prompt": "picturesque campus, advanced research facilities, collaborative student projects, academic presentations, high-tech environment"
        },
        {
            "title":"Berkeley",
            "image": "Berkeley_historic_campus.png",
            "prompt": "historic campus, cutting-edge research labs, scholarly discussions, diverse student body, innovative research environment"
        },
        {
            "title":"Silicon Valley",
            "image": "Silicon_Valley_high-tech_office_buildings.png",
            "prompt": "high-tech office buildings, innovation labs, tech startups, collaborative workspaces, futuristic technology, entrepreneurial spirit"
        },
        {
            "title":"Shenzhen High-Tech Industrial Park",
            "image": "Shenzhen_High-Tech_Industrial_Park_modern_tech_park.png",
            "prompt": "modern tech park, advanced research facilities, startup incubators, tech exhibitions, innovative products, rapid development"
        },
        {
            "title":"Cambridge Science Park",
            "image": "Cambridge_Science_Park_science-focused_tech_park.png",
            "prompt": "science-focused tech park, research institutions, collaborative projects, high-tech labs, academic-industry partnerships, innovative environment"
        },
        {
            "title":"Binance Office",
            "image": "Binance_Office_sleek_modern_office.png",
            "prompt": "sleek modern office, Binance logo, trading screens, team discussions, crypto market data, high-security environment"
        },
        {
            "title":"Coinbase Office",
            "image": "Coinbase_Office_contemporary_workspace.png",
            "prompt": "contemporary workspace, Coinbase logo, financial data screens, collaborative meetings, advanced tech equipment, professional atmosphere"
        }
    ]
    let inserts = []
    for (let i = 0; i < data.length; i++) {
        let te = data[i]
        te.image = 'https://tmp-file.aigic.ai/persistence/' + te.image
        inserts.push({
            type:"location",
            template_id:1,
            value:te
        })
    }
    const { data1, error } = await supabase
    .from('data')
    .insert(inserts)
    .select()
    console.log("supabase",data1,error)
    
}

// insert_data()

async function insert_app_data() {
    let inserts = []
    for (let i = 5; i < 25; i++) {
        inserts.push({
            app_id:1,
            template_id:1,
            data_id:i
        })
    }
    const { data, error } = await supabase
    .from('app_data')
    .insert(inserts)
    .select()
    console.log("supabase",data,error)
    
}

insert_app_data()