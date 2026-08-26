const papers = [
    {
        "number": "3",
        "forum": "https://openreview.net/forum?id=FRwOPIGimj",
        "title": "Understanding Writing Assistants for Scientific Figure Captions: A Thematic Analysis",
        "authors": "Ho Yin Sam Ng, Ting-Yao Hsu, Jiyoo Min, Sungchul Kim, Ryan A. Rossi, Tong Yu, Hyunggu Jung, Ting-Hao Kenneth Huang",
        "abstract": "Scientific figure captions are essential for communicating complex data but are often overlooked, leading to unclear or redundant descriptions. While many studies focus on generating captions as an \u2018output\u2019, little attention has been given to the writer's process of crafting captions for scientific figures. This study examines how researchers use AI-generated captions to support caption writing. Through thematic analysis of interviews and video recordings with 18 participants from diverse disciplines, we identified four key themes: (1) integrating captions with figures and text, (2) bridging gaps between language proficiency and domain expertise, (3) leveraging multiple AI-generated suggestions, and (4) adapting to diverse writing norms. These findings provide actionable design insights for developing AI writing assistants that better support researchers in creating effective scientific figure captions.",
    },
    {
        "number": "4",
        "forum": "https://openreview.net/forum?id=74iAsbbVRd",
        "title": "Comparing Native and Non-native English Speakers' Behaviors in Collaborative Writing through Visual Analytics",
        "authors": "Yuexi Chen, Yimin Xiao, Kazi Tasnim Zinat, Naomi Yamashita, Ge Gao, Zhicheng Liu",
        "abstract": "Understanding collaborative writing dynamics between native speakers (NS) and non-native speakers (NNS) is critical for enhancing collaboration quality and team inclusivity. In this paper, we partnered with communication researchers to develop \\textsc{COALA}, an AI-assisted visual analytics tool for comparing NS and NNS behaviors in 162 writing sessions across 27 teams. We validated the effectiveness of \\textsc{COALA} through user studies with domain experts (N=2+2) and researchers with relevant experience (N=8). We present the insights discovered by participants using \\textsc{COALA} and suggest features for future AI writing assistants for collaborative writing involving NNS.",
    },
    {
        "number": "6",
        "forum": "https://openreview.net/forum?id=Q3Smhx74ux",
        "title": "ARWI: Arabic Write and Improve",
        "authors": "Kirill Chirkunov, Bashar Alhafni, Chatrine Qwaider, Nizar Habash, Ted Briscoe",
        "abstract": "Although Arabic is spoken by over 400 million people, advanced Arabic writing assistance tools remain limited. To address this gap, we present ARWI, a new writing assistant that helps learners improve essay writing in Modern Standard Arabic. ARWI is the first publicly available Arabic writing assistant to include a prompt database for different proficiency levels, an Arabic text editor, state-of-the-art grammatical error detection and correction, and automated essay scoring aligned with the Common European Framework of Reference standards for language attainment (https://arwi.mbzuai.ac.ae/). Moreover, ARWI can be used to gather a growing auto-annotated corpus, facilitating further research on Arabic grammar correction and essay scoring, as well as profiling patterns of errors made by native speakers and non-native learners. A preliminary user study shows that ARWI provides actionable feedback, helping learners identify grammatical gaps, assess language proficiency, and guide improvement.",
    },
    {
        "number": "7",
        "forum": "https://openreview.net/forum?id=RGHiKXgRqN",
        "title": "ReadCtrl: Personalizing text generation with readability-controlled instruction learning",
        "authors": "Hieu Tran, Zonghai Yao, Lingxi Li, Hong Yu",
        "abstract": "Content generation conditioning on users' readability is an important application for personalization. In an era of large language models (LLMs), readability-controlled text generation based on LLMs has become increasingly important. This paper introduces a novel methodology called \"Readability-Controlled Instruction Learning (ReadCtrl),\" which aims to instruction-tune LLMs to tailor users' readability levels. Unlike the traditional methods, which primarily focused on categorical readability adjustments\u2014typically classified as high, medium, and low or expert and layperson levels\u2014with limited success, ReadCtrl introduces a dynamic framework that enables LLMs to generate content at various (near continuous level) complexity levels, thereby enhancing their versatility across different applications. Our results show that the ReadCtrl-Mistral-7b models significantly outperformed strong baseline models such as GPT-4 and Claude-3, with a win rate of 52.1%:35.7% against GPT-4 in human evaluations. Furthermore, ReadCtrl has shown significant improvements in automatic evaluations, as evidenced by better readability metrics (e.g., FOG, FKGL) and generation quality metrics (e.g., BLEU, SARI, SummaC-Factuality,  UniEval-Consistency and Coherence). These results underscore ReadCtrl's effectiveness and tenacity in producing high-quality, contextually appropriate outputs that closely align with targeted readability levels, marking a significant advancement in personalized content generation using LLMs.",
    },
    {
        "number": "9",
        "forum": "https://openreview.net/forum?id=2BzmJZXCcm",
        "title": "AI Writing Assistants in Tanzanian Universities: Adoption Trends, Challenges, and Opportunities",
        "authors": "Alfred Malengo Kondoro",
        "abstract": "This study examines the adoption, challenges, and impact of AI writing assistants in Tanzanian universities, with a focus on their role in supporting academic writing, enhancing accessibility, and accommodating low-resource languages such as Swahili. Through a structured survey of  1,005 university students, we analyze AI usage patterns, key barriers to adoption, and the improvements needed to make AI writing assistants more inclusive and effective. Findings reveal that limited Swahili integration, affordability constraints, and ethical concerns hinder AI adoption, disproportionately affecting students in resource-constrained settings. To address these challenges, we propose strategies for adapting AI models to diverse linguistic, academic, and infrastructural contexts, emphasizing Swahili-language support, AI literacy initiatives, and accessibility-focused AI development. By bridging these gaps, this study contributes to the development of AI-driven educational tools that are more equitable, contextually relevant, and effective for students in Tanzania and beyond.",
    },
    {
        "number": "10",
        "forum": "https://openreview.net/forum?id=doQgihIS4N",
        "title": "From Crafting Text to Crafting Thought: Grounding Intelligent Writing Support to Writing Center Pedagogy",
        "authors": "Yijun Liu, Tal August",
        "abstract": "Intelligent writing support tools have evolved from solving surface-level issues to collaborating and creating language with writers. Along with these new capabilities come concerns that generated fluent text can impact writers' processes in unintended ways, especially for students. In this workshop paper, we look to a similar transition that writing centers experienced over the last century, which shifted focus from fixing surface-level issues to maintaining student writer voices. We interviewed 10 current writing tutors and grounded their described practices with ideas proposed in writing center literature. We employed these strategies in developing an intelligent writing tool prototype. We describe the design of our tool and discuss potential evaluations along with how to foster deeper relationships between writers and writing centers using intelligent writing tools.",
    },
    {
        "number": "11",
        "forum": "https://openreview.net/forum?id=YFucufmb2W",
        "title": "Interaction-Required Suggestions for Control, Ownership, and Awareness in Human-AI Co-Writing",
        "authors": "Kenneth C. Arnold, Jiho Kim",
        "abstract": "This paper explores interaction designs for generative AI interfaces that necessitate human involvement throughout the generation process. We argue that such interfaces can promote cognitive engagement, agency, and thoughtful decision-making. Through a case study in text revision, we present and analyze two interaction techniques: (1) using a predictive-text interaction to type the agent's response to a revision request, and (2) highlighting potential edit opportunities in a document. Our implementations demonstrate how these approaches reveal the landscape of writing possibilities and enable fine-grained control. We discuss implications for human-AI writing partnerships and future interaction design directions.",
    },
    {
        "number": "12",
        "forum": "https://openreview.net/forum?id=JKU9RInfFR",
        "title": "Voice Interaction With Conversational AI Could Facilitate Thoughtful Reflection and Substantive Revision in Writing",
        "authors": "Jiho Kim, Philippe Laban, Xiang Chen, Kenneth C. Arnold",
        "abstract": "Writing well requires not only expressing ideas but also refining them through revision, a process facilitated by reflection. Prior research suggests that feedback delivered through dialogues, such as those in writing center tutoring sessions, can help writers reflect more thoughtfully on their work compared to static feedback. Recent advancements in multi-modal large language models (LLMs) now offer new possibilities for supporting interactive and expressive voice-based reflection in writing. In particular, we propose that LLM-generated static feedback can be repurposed as conversation starters, allowing writers to seek clarification, request examples, and ask follow-up questions, thereby fostering deeper reflection on their writing. We argue that voice-based interaction can naturally facilitate this conversational exchange, encouraging writers' engagement with higher-order concerns, facilitating iterative refinement of their reflections, and reduce cognitive load compared to text-based interactions. To investigate these effects, we propose a formative study exploring how text vs. voice input influence writers' reflection and subsequent revisions. Findings from this study will inform the design of intelligent and interactive writing tools, offering insights into how voice-based interactions with LLM-powered conversational agents can support reflection and revision.",
    },
    {
        "number": "13",
        "forum": "https://openreview.net/forum?id=lHS46dfoxk",
        "title": "Large Language Model Use Impact Locus of Control",
        "authors": "Jenny Xiyu Fu, Brennan Antone, Kowe Kadoma, Malte Jung",
        "abstract": "As AI tools increasingly shape how we write, they may also quietly reshape how we perceive ourselves. This paper explores the psychological impact of co-writing with AI on people's locus of control. Through an empirical study with 462 participants, we found that employment status plays a critical role in shaping users' reliance on AI and their locus of control. Current results demonstrated that employed participants displayed higher reliance on AI and a shift toward internal control, while unemployed users tended to experience a reduction in personal agency. Through quantitative results and qualitative observations, this study opens a broader conversation about AI's role in shaping personal agency and identity.",
    },
    {
        "number": "14",
        "forum": "https://openreview.net/forum?id=jGOYSXqeSG",
        "title": "RONA: Pragmatically Diverse Image Captioning with Coherence Relations",
        "authors": "Aashish Anantha Ramakrishnan, Aadarsh Anantha Ramakrishnan, Dongwon Lee",
        "abstract": "Writing Assistants (e.g., Grammarly, Microsoft Copilot) traditionally generate diverse image captions by employing syntactic and semantic variations to describe image components. However, human-written captions prioritize conveying a central message alongside visual descriptions using pragmatic cues. To enhance caption diversity, it is essential to explore alternative ways of communicating these messages in conjunction with visual content. We propose RONA, a novel prompting strategy for Multi-modal Large Language Models (MLLM) that leverages Coherence Relations as a controllable axis for pragmatic variations. We demonstrate that RONA generates captions with better overall diversity and ground-truth alignment, compared to MLLM baselines across multiple domains. Our code is available at: https://github.com/aashish2000/RONA",
    },
    {
        "number": "15",
        "forum": "https://openreview.net/forum?id=FOVvtn7m4x",
        "title": "Multi-Agent Based Character Simulation for Story Writing",
        "authors": "Tian Yu, Ken Shi, Zixin Zhao, Gerald Penn",
        "abstract": "This work proposes a novel multi-agent story-generation system that writes stories from a narrative plan. Traditional approaches tend to generate a section of text directly from its outline. Our system, by contrast, divides this elaboration process into role-play and rewrite steps, where the former step enacts the story in chronological order with LLM-backed character agents, and the latter step refines the role-play result to align with a narrative plan. We show that the stories produced by our system are preferable to two other LLM-based story-generation approaches. We attribute this advancement to the benefits of incorporating a character-based simulation strategy.",
    },
    {
        "number": "17",
        "forum": "https://openreview.net/forum?id=7HjJaMwFbw",
        "title": "An Analysis of Scoring Methods for Reranking in Large Language Model Story Generation",
        "authors": "Megan Deering, Gerald Penn",
        "abstract": "Outline-conditioned story generation using Large Language Models (LLMs) offers a promising approach for automating narrative creation. Some outline-conditioned story generation methods use automatic scoring during the generation process in order to improve the story quality. However, current research has shown that automatic scoring is not ideal for assessing story quality. This paper evaluates three proposed automatic story-scoring methods to improve the reranking of outputs during the generation process. These scoring methods leverage different prompting strategies and fine-tuning techniques to enhance the accuracy and relevance of the assessments. By experimenting with these approaches within a beam search framework, we aim to identify the most effective methods for optimizing story-generation outcomes. While we have found no significant overall difference between these methods in terms of their agreement with human ratings during story generation, the overall story ratings by human evaluators are average. These findings motivate the need for improved automatic scoring techniques and datasets while also indicating that simpler, more easily implementable scoring methods for reranking perform comparably to more complex approaches.",
    }
];

$(document).ready(function () {
  $.each(papers, function (i, paper) {
    if (paper.decision === "Reject") {
      return;
    }
    var p = $("<p>");
    var title = $("<span class='papertitle'>").append(paper.title);
    let re = /\|/gi;
    let str = paper.authors;
    let newstr = str.replace(re, ", ");
    var authors = $("<span class='authors'>").append(newstr);
    var abstract = $("<span class='abstract'>")
      .append("<br>")
      .append(paper.abstract);
    abstract.addClass(paper.number.toString()).hide();
    p.append(title);
    if (paper.title === "From Crafting Text to Crafting Thought: Grounding Intelligent Writing Support to Writing Center Pedagogy") {
      p.append(' <span class="best">~*~best paper~*~</span> ');
    }
    if (paper.title === "ARWI: Arabic Write and Improve") {
      p.append(' <span class="best">~*~diversity award~*~</span> ');
    }
    // if (paper["Paper type"] === "cross-sub") {
    //   p.append(' <span class="cross">~cross submission~</span> ');
    // } 
    
    var href = 'assets/papers/paper' + paper.number.toString() + '_2025.pdf';
    
    // Overwrite href with arxiv link if provided
    if (paper.hasOwnProperty('arxiv')){
      href = paper.arxiv;
    }
    
    var pdf = $('<a>').attr('href', href).text('pdf');
    p.append('<br>').append(' [').append(pdf).append(']');
    p.append("<br>").append(authors).append("<br>").append(abstract);
    var a_button = $("<span>").addClass("text-link").append("show abstract");
    a_button.click(function () {
      console.log($(this).text());
      if ($(this).text() === "show abstract") {
        $("." + paper.number.toString()).show();
        $(this).text("hide abstract");
      } else {
        $("." + paper.number.toString()).hide();
        $(this).text("show abstract");
      }
    });
    p.append(a_button).append(abstract);
    $(".regPapers").append(p);
  });
});
