//https://cdn.glitch.global/d058c114-3406-43be-8a3c-d3afff35eda2/paper22.pdf?v=1653323402036
const papers = [
    {
        "number": "1",
        "title": "An Engineering Perspective on Writing Assistants for Productivity and Creative Code",
        "authorids": "~Sarah_D'Angelo1|ambarm@google.com",
        "authors": "Sarah D'Angelo|Ambar Murillo",
        "keywords": "code generation|machine learning|software engineers|creativity|evaluation",
        "TL;DR": "We propose measurements for evaluating the impact of writing assistants and how they are changing the way we write, from the perspective of code generation tools for software engineering.",
        "abstract": "Software developers write code nearly everyday, ranging from simple straightforward tasks to challenging and creative tasks. As we have seen across domains, AI/ML based assistants are on the rise in the field of computer science. We refer to them as code generation tools or ML enhanced software developing tooling; and it is changing the way developers write code. As we think about how to design and measure the impact of intelligent writing assistants, the approaches used in software engineering and the considerations unique to writing code can provide a different and complementary perspective for the workshop. In this paper, we propose a focus on two themes: (1) measuring the impact of writing assistants and (2) how code writing assistants are changing the way engineers write code. In our discussion of these topics, we outline approaches used in software engineering, and how the disciplines of prose writing and code writing can learn from each other. We aim to contribute to the development of a taxonomy of writing assistants that includes possible methods of measurement and considers factors unique to each domain (e.g. prose or code). ",
        "decision": "Accept"
    },
    {
        "number": "4",
        "title": "What Can\u2019t Large Language Models Do? The Future of AI-Assisted Academic Writing",
        "authorids": "~Raymond_Fok1",
        "authors": "Raymond Fok",
        "keywords": "",
        "TL;DR": "This paper overviews emergent paradigms in human-AI collaborative writing and their implications on future academic writing assistants.",
        "abstract": "Large language models have revolutionized the way we interact with the world around us, yet their relative nascency suggests its transformative potential on society is still underexplored. Applications built on these models have excelled at summarizing articles, engaging in realistic conversations, and writing creative stories. However, there remain open questions in how we can design tools that effectively leverage these models to support complex, cognitive demanding, and factual writing processes. In this position paper, we consider emergent paradigms in human-AI collaborative writing and their implications on future academic writing assistants.",
        "decision": "Accept"
    },
    {
        "number": "5",
        "title": "Writing Assistants Should Model Social Factors of Language",
        "authorids": "~Vivek_Kulkarni2|~Vipul_Raheja1",
        "authors": "Vivek Kulkarni|Vipul Raheja",
        "keywords": "writing assistants|large language models|social factors",
        "TL;DR": "Intelligent writing assistants powered by Large Language Models (LLMs) should incorporate social factors of language to provide a smarter, more effective, and truly personalized user experience and contribute to increased user adoption",
        "abstract": "Intelligent writing assistants powered by Large Language Models (LLMs) are more popular today than ever before, but their further widespread adoption is precluded by sub-optimal performance. In this position paper, we argue that a major reason for this sub-optimal performance and adoption is a singular focus on the information content of language while ignoring its social aspects. We analyze the different dimensions of these social factors in the context of writing assistants and propose their incorporation into building smarter, more effective, and truly personalized writing assistants that would enrich the user experience and contribute to increased user adoption.",
        "decision": "Accept"
    },
    {
        "number": "8",
        "title": "Interactive writing systems and why small(er) could be more beautiful",
        "authorids": "~Ibukun_Olatunji1",
        "authors": "Ibukun Olatunji",
        "keywords": "writing assistants|data sets|large language models|co-creativity",
        "TL;DR": "A case for the use of small rather than big data in writing systems",
        "abstract": "Machine learning models can support human creativity, including tasks such as writing. This position paper explorers and critiques the design of writing systems based on Large Language Models (LLMs) and big data.  The paper proposes smaller datasets as way to think about systems for underrepresented languages, types of writers, and writing tasks. In addressing these topics, the paper also considers how can we make writing assistants that are more accessible and inclusive than current state of the art LLMs .",
        "decision": "Accept"
    },
    {
        "number": "9",
        "title": "A Situation Awareness Perspective on Intelligent Writing Assistants: Augmenting Human-AI Interaction with Eye Tracking Technology",
        "authorids": "~Moritz_Langner1|peyman.toreini@kit.edu|alexander.maedche@kit.edu",
        "authors": "Moritz Langner|Peyman Toreini|Alexander Maedche",
        "keywords": "writing assistant|eye tracking|situation awareness",
        "TL;DR": "In this paper we propose an intelligent writing assistant that uses eye tracking technology to infer the situation awareness of the user",
        "abstract": "Intelligent writing assistants support the partial automation of the writing process. Existing research has investigated the interaction between humans and automated systems and has identified the maintenance of situation awareness (SA) as a key challenge for humans. Especially in the context of intelligent writing assistants, humans have to maintain SA as they are held responsible for the written text. We build on existing research on automated systems and human-robot/AI collaboration and their interplay with SA theory. In particular, we propose the augmentation of human interaction with intelligent writing assistants through the use of eye tracking technology. Eye tracking technology enables the non-invasive detection of SA based on eye movements. On this basis, writing assistants can be adapted to users' cognitive states such as SA. We argue that for the successful implementation of intelligent writing assistants in the real world, eye-based analysis of SA and augmentation are key.",
        "decision": "Accept"
    },
    {
        "number": "11",
        "title": "Creative Struggle: Arguing for the Value of Difficulty in Supporting Ownership and Self-Expression in Creative Writing",
        "authorids": "~David_Zhou1|ssterman@illinois.edu",
        "authors": "David Zhou|Sarah Sterman",
        "keywords": "intelligent writing assistant|creative writing|human-computer interaction",
        "TL;DR": "Psychological ownership over the self-interrogation process, or the creative struggle, can be a productive way to center the writer\u2019s experience as a key design goal for intelligent writing assistants.",
        "abstract": "In each step of the creative writing process, from ideation to generation to revision, authors must grapple with their creative goals and personal perspectives [10]. This self-interrogation drives both the author's sense of ownership over the output and sense of authenticity of self-expression. As ever more capable language models and generators accelerate the development of intelligent writing assistants, it is essential that designers of these tools consider how writing assistants affect perceived ownership and self-expression in the creative writing process. Here, we suggest that the role of writing assistant software should not be to remove all obstacles and frustrations, but to enable the writer to focus their efforts on the creative challenges that are the most personally fulfilling to solve. We believe that considering psychological ownership over the self-interrogation process, or the creative struggle, can be a productive way to center the writer's experience as a key design goal. A focus on psychological ownership can frame the pieces of the creative process that may be offloaded without interfering with a writer's own sense of expression. By participating in the In2Writing workshop, we hope to bring the concept of creative struggle into discussions of ownership, taxonomy, and future directions of writing assistant design.",
        "decision": "Accept"
    },
    {
        "number": "12",
        "title": "Repurposing Text-Generating AI into a Thought-Provoking Writing Tutor",
        "authorids": "~Tyler_Taewook_Kim1|qt2142@columbia.edu",
        "authors": "Tyler Taewook Kim|Quan Tan",
        "keywords": "AI writing tools|generative text technology|recursive feedback mechanisms|Socratic questions|writing abilities|critical thinking skills|instructional support|natural writing processes|knowledge acquisition|student-centered learning.",
        "TL;DR": "AI writing tools can revolutionize writing education by incorporating recursive feedback mechanisms to enhance student-centered learning and critical thinking skills.",
        "abstract": "Text-generating AI technology has the potential to revolutionize writing education. However, current AI writing-support tools are limited to providing linear feedback to users. In this work, we demonstrate how text-generating AI can be repurposed into a thought-provoking writing tutor with the addition of recursive feedback mechanisms. Concretely, we developed a prototype AI writing-support tool called Scraft that asks Socratic questions to users and encourages critical thinking. To explore how Scraft can aid with writing education, we conducted a preliminary study with 15 students in a university writing class. Participants expressed that Scraft\u2019s recursive feedback is helpful for improving their writing skills. However, participants also noted that Scraft\u2019s feedback is sometimes factually incorrect and lacks context. We discuss the implications of our findings and future research directions.",
        "decision": "Accept"
    },
    {
        "number": "13",
        "title": "Approach Intelligent Writing Assistants Usability with Seven Stages of Action",
        "authorids": "~Avinash_Bhat1|~Disha_Shrivastava1|~Jin_L.C._Guo1",
        "authors": "Avinash Bhat|Disha Shrivastava|Jin L.C. Guo",
        "keywords": "user centered design|interaction design|large language models|writing assistants",
        "TL;DR": "The paper proposes using Norman's seven stages of action as a framework for designing user interactions with writing assistants supported by LLMs, highlighting the limitations and potential of current tools and identifying improvement opportunities.",
        "abstract": "Despite the potential of Large Language Models (LLMs) as writing assistants, they are plagued by issues like coherence and fluency of the model output, trustworthiness, ownership of the generated content, and predictability of model performance, thereby limiting their usability. In this position paper, we propose to adopt Norman's seven stages of action as a framework to approach the interaction design of intelligent writing assistants. We illustrate the framework's applicability to writing tasks by providing an example of software tutorial authoring. The paper also discusses the framework as a tool to synthesize research on the interaction design of LLM-based tools and presents examples of tools that support the stages of action. Finally, we briefly outline the potential of a framework for human-LLM interaction research.",
        "decision": "Accept",
        "arxiv": "https://arxiv.org/abs/2304.02822",
    },
    {
        "number": "15",
        "title": "Parachute: Evaluating Interactive Human-LM Co-writing Systems",
        "authorids": "~Hua_Shen1|~Tongshuang_Wu1",
        "authors": "Hua Shen|Tongshuang Wu",
        "keywords": "human evaluation|interaction|co-writing systems",
        "TL;DR": "",
        "abstract": "A surge of advances in language models (LMs) has led to significant interest in using LMs to build co-writing systems, in which humans and LMs interactively contribute to a shared writing artifact. However, there is a lack of studies assessing co-writing systems in interactive settings. We propose a human-centered evaluation framework, Parachute, for interactive co-writing systems. Parachute showcases an integrative view of interaction evaluation, where each evaluation aspect consists of categorized practical metrics. Furthermore, we present Parachute with a use case to demonstrate how to evaluate and compare co-writing systems using Parachute.",
        "decision": "Accept"
    },
    {
        "number": "17",
        "title": "Practical Challenges for Investigating Abbreviation Strategies",
        "authorids": "~Elisa_Kreiss1|~Subhashini_Venugopalan2|~Shaun_Kane1|~Meredith_Ringel_Morris1",
        "authors": "Elisa Kreiss|Subhashini Venugopalan|Shaun Kane|Meredith Ringel Morris",
        "keywords": "abbreviation strategies|assistive writing|cognitive load",
        "TL;DR": "",
        "abstract": "Saying more while typing less is the ideal we strive towards when designing assistive writing technology that can minimize effort. Complementary to efforts on predictive completions is the idea to use a drastically abbreviated version of an intended message, which can then be reconstructed using Language Models. This paper highlights the challenges that arise from investigating what makes an abbreviation scheme promising for a potential application. We hope that this can provide a guide for designing studies which consequently allow for fundamental insights on efficient and goal-driven abbreviation strategies.",
        "decision": "Accept"
    },
    {
        "number": "18",
        "title": "What Writing Assistants Can Learn from Programming IDEs",
        "authorids": "~Sergey_Titov1|~Agnia_Sergeyuk1|timofey.bryksin@jetbrains.com",
        "authors": "Sergey Titov|Agnia Sergeyuk|Timofey Bryksin",
        "keywords": "Integrated Development Environments|Writing assistants|Human-Computer Interaction|Cognitive load",
        "TL;DR": "We argue that established practices in the development of IDEs, as well as the use of IDEs to research Writing assistants, can be fruitful for cognitive load reduction in next-generation Writing assistants.",
        "abstract": "With the development of artificial intelligence, writing assistants (WAs) are changing the way people interact with text, creating lengthy outputs that can be overwhelming for users. The programming field has long addressed this issue, and Integrated Development Environments (IDEs) have been created for efficient software development, helping programmers reduce the cognitive load. This experience could be employed in the development of WAs. IDEs can also be used to test assumptions about interventions that help people interact with WAs efficiently. Previous works have successfully used self-written IDE plugins to test hypotheses in the field of human-computer interaction. The lessons learned can be applied to the building of WAs.",
        "decision": "Accept",
        "arxiv": "https://arxiv.org/abs/2303.16175",
    },
    {
        "number": "19",
        "title": "Future Writing Assistants for Qualitative Research",
        "authorids": "~Courtni_Byun1",
        "authors": "Courtni Byun",
        "keywords": "qualitative research|large language models|writing assistants",
        "TL;DR": "Large language models incorporated into writing assistants for qualitative research could make it faster and more thorough.",
        "abstract": "Qualitative analysis can be an extremely time-intensive process. Various writing assistants have been developed for qualitative analysis (QA), but they all stop short of providing a nuanced analysis of qualitative data. Future QA writing assistants could leverage large language models (LLMs) to help change this. We explore how future writing assistants using these models might benefit QA and qualitative research. ",
        "decision": "Accept"
    },
    {
        "number": "20",
        "title": "Writing Tools: Looking Back to Look Ahead",
        "authorids": "~Cerstin_Mahlow1",
        "authors": "Cerstin Mahlow",
        "keywords": "writing technology|natural language processing|intelligent writing tools|interactive editing",
        "TL;DR": "Past research on writing tools failed due to technical limitations, but with today's computing power and NLP resources, new intelligent writing assistants can benefit from earlier learnings.",
        "abstract": "Research on writing tools started with the increased availability of computers in the 1970s.  After a first phase addressing the needs of programmers and data scientists, research in the late 1980s started to focus on writing-specific needs.  Several projects aimed at supporting writers and letting them concentrate on the creative aspects of writing by having the writing tool take care of the mundane aspects using NLP techniques.  Due to technical limitations at that time the projects failed and research in this area stopped.  However, today\u2019s computing power and NLP resources make the ideas from these projects technically feasible; in fact, we see projects explicitly continuing from where abandoned projects stopped, and we see new applications integrating NLP resources without making references to those old projects.  To design intelligent writing assistants with the possibilities offered by today's technology, we should re-examine the goals and lessons learned from previous projects to define the important dimensions to be considered.",
        "decision": "Accept",
        "arxiv": "https://arxiv.org/abs/2303.17894",
    },
    {
        "number": "22",
        "title": "Towards an Authorial Leverage Evaluation Framework for Expressive Benefits of Deep Generative Models in Story Writing",
        "authorids": "~Sherol_Chen1|carter@carterthecomic.com|olsen.david@gmail.com|~Ethan_Manilow1|~Mark_Nelson1|~Qiuyi_Zhang1|sdutta6@vols.utk.edu|~Piotr_W_Mirowski1|~Kory_Wallace_Mathewson1",
        "authors": "Sherol Chen|Carter Morgan|David Olsen|Ethan Manilow|Mark Nelson|Qiuyi Zhang|Senjuti Dutta|Piotr W Mirowski|Kory Wallace Mathewson",
        "keywords": "large language models|mixed initiative|generative ai|intelligent narrative technologies|NLP|NLU|computational creativity",
        "TL;DR": "We propose two directions, (1) author-focused and (2) audience-focused evaluation, for furthering our understanding of Authorial Leverage of LLMs, particularly in the domain of comedy writing.  ",
        "abstract": "What are dimensions of human intent, and how do writing tools shape and augment these expressions? From papyrus to auto-complete, a major turning point was when Alan Turing famously asked, \u201cCan Machines Think?\u201d If so, should we offload aspects of our thinking to machines, and what impact do they have in enabling the intentions we have? This paper adapts the Authorial Leverage framework, from the Intelligent Narrative Technologies literature, for evaluating recent generative model advancements. With increased widespread access to Large Language Models (LLMs), the evolution of our evaluative frameworks follow suit. To do this, we discuss previous expert studies of deep generative models for fiction writers and playwrights, and propose both author- and audience-focused directions for furthering our understanding of Authorial Leverage of LLMs, particularly in the domain of comedy writing.  ",
        "decision": "Accept"
    },
    {
        "number": "23",
        "title": "DiaryMate: Exploring the Roles of Large Language Models in Facilitating AI-mediated Journaling",
        "authorids": "~Taewan_Kim5|dhoon@uw.edu|~Young-Ho_Kim1|hwajung@kaist.ac.kr",
        "authors": "Taewan Kim|Donghoon Shin|Young-Ho Kim|Hwajung Hong",
        "keywords": "journaling|diary|Human-AI collaborative writing|large language model",
        "TL;DR": "This position paper explores the potential benefits and drawbacks of using large language models (LLMs) in personal journaling.",
        "abstract": "In this position paper, we report our ongoing research examining the use of large language models (LLMs) in promoting mental well-being through journaling. While journaling can be beneficial for expressing personal thoughts and emotions, it can be challenging for individuals who struggle to articulate their internal states into words. LLMs have the potential to assist with this by translating users' ambiguous thoughts and experience into writing. However, using LLMs in journaling can also have drawbacks, such as neglecting the personal context of users and reducing users' initiative in writing. To explore the opportunities and challenges of using LLMs in journaling, we conducted a field deployment study using DiaryMate. The participants used the diverse sentences generated by the LLM to reflect on their past experiences from multiple perspectives and saw it as an empathetic partner. However, they gave excessive credibility to the LLM's generated sentences, often prioritizing its emotional expressions over their own. Based on the findings, we highlight the importance of considering the risks and benefits of using such technology in supporting personal reflection and emotional expression.",
        "decision": "Accept"
    },
    {
        "number": "24",
        "title": "Do AI Writing Assistants Improve Productivity?",
        "authorids": "~Robert_E_Cummings1",
        "authors": "Robert E Cummings",
        "keywords": "AI-powered writing assistants|AI-powered writing generators|Google Smart Compose",
        "TL;DR": "Position Statement on AI-Powered Writing Assistants and Generators for In2Writing Workshop",
        "abstract": "In the last 12 months, AI-powered writing assistants and especially AI-powered writing generators have attracted attention worldwide. To best understand the potential of writing generators, it will be helpful to first understand the impact of writing assistants. As writing assistants and generators continue to proliferate, the research community should develop clearer definitions and frameworks for both categories of AI-powered tools. By creating a taxonomy of the rapidly emerging writing generators, the second In2Writing Workshop has the opportunity to influence the reception of writing generators currently under development.",
        "decision": "Accept"
    },
    {
        "number": "25",
        "title": "Writing with Generative AI: Multi-modal and Multi-dimensional Tools for Journalists",
        "authorids": "~Sitong_Wang1|~Lydia_Chilton1|~Jeffrey_Nickerson1",
        "authors": "Sitong Wang|Lydia Chilton|Jeffrey Nickerson",
        "keywords": "",
        "TL;DR": "",
        "abstract": "New generative AI models expand the design space for writing assistants. These systems together with humans form a larger creative system. The authors are building tools that can potentially help journalists write, as part of an NSF grant on the Future of News Work. At the CHI conference, a paper coming out of the grant will be presented: the paper describes a system for generating news angles and its evaluation by journalists. Building on this work, we are exploring ways of augmenting writing assistants for use in journalism. Two complementary directions are discussed here. One direction is building generative writing assistants in conjunction with image generation in order to generate storyboards. A second is building a network graph-based interface so that ideation can be explored in a semi-structured yet non-linear way. ",
        "decision": "Accept"
    },
    {
        "number": "26",
        "title": "Can AI Support Fiction Writers Without Writing For Them?",
        "authorids": "~Jessi_Stark1|~Anthony_Tang1|~Young-Ho_Kim1|~Joonsuk_Park1|~Daniel_Wigdor1",
        "authors": "Jessi Stark|Anthony Tang|Young-Ho Kim|Joonsuk Park|Daniel Wigdor",
        "keywords": "writing support tools|creativity support tools|interview study|fiction writing|human-AI collaboration",
        "TL;DR": "We present preliminary findings from an interview study about how AI tools can support fiction writers outside of plain text generation.",
        "abstract": "The HCI community has intensively explored the employment of AIs in story generation. However, creative writers may have mixed perceptions about their ownership of the story when there are significant AI contributions. We explore opportunities for AIs to support fiction writers without compromising their feeling of story ownership. In this paper, we present preliminary results of a formative interview study with fiction writers (N=9), focusing on their practice and the challenges of the story-writing process. We discuss some of the challenges these writers face and propose design opportunities to address these challenges in ways other than text generation.",
        "decision": "Accept"
    },
    {
        "number": "27",
        "title": "Dimensions for Designing LLM-based Writing Support",
        "authorids": "~Nur_Yildirim1|fog@andrew.cmu.edu",
        "authors": "Nur Yildirim|Frederic Gmeiner",
        "keywords": "",
        "TL;DR": "We discuss LLM capabilities, task complexity and output quality as key dimensions to consider when designing LLM-based writing support.",
        "abstract": "In our experience, there are three key considerations when designing LLM experiences for writing support: LLM capabilities, task complexity and output quality. In this position paper, we argue that a taxonomy of writing assistants capturing these dimensions could scaffold the process of designing experiences that writers find valuable. The remainder of this paper details each dimension and how these could inform the exploration of LLM\u2019s design space.",
        "decision": "Accept"
    },
    {
        "number": "28",
        "title": "Beyond Summarization: Designing AI Support for Real-World Expository Writing Tasks",
        "authorids": "~Zejiang_Shen1|~Tal_August1|paos@allenai.org|~Kyle_Lo1|~Jonathan_Bragg1|jeffhammerbacher@allenai.org|~Doug_Downey1|~Joseph_Chee_Chang1|~David_Sontag1",
        "authors": "Zejiang Shen|Tal August|Pao Siangliulue|Kyle Lo|Jonathan Bragg|Jeff Hammerbacher|Doug Downey|Joseph Chee Chang|David Sontag",
        "keywords": "AI-Assisted Writing|Summarization|Expert Writing|Augmented Writing|Expository Writing",
        "TL;DR": "",
        "abstract": "Large language models have introduced exciting new opportunities and challenges in designing and developing new AI-assisted writing support tools. Recent work has shown that leveraging this new technology can transform writing in many scenarios such as ideation during creative writing, editing support, and summarization. However, AI-supported expository writing--including real-world tasks like scholars writing literature reviews or doctors writing progress notes--is relatively understudied. In this position paper, we argue that developing AI supports for expository writing has unique and exciting research challenges and can lead to high real-world impacts. We characterize expository writing as evidence-based and knowledge-generating: it contains summaries of external documents as well as new information or knowledge. It can be seen as the product of authors' sensemaking process over a set of source documents, and the interplay between reading, reflection, and writing opens up new opportunities for designing AI support. We sketch three components for AI support design and discuss considerations for future research.",
        "decision": "Accept",
        "arxiv": "https://arxiv.org/abs/2304.02623",
    },
    {
        "number": "29",
        "title": "The Model is the Message",
        "authorids": "~Isabelle_Levent1|~Lila_Shroff1",
        "authors": "Isabelle Levent|Lila Shroff",
        "keywords": "",
        "TL;DR": "Large Language Models (LLMs) are a new kind of medium\u2014in McLuhan\u2019s sense of the word\u2014and centralized corporate control of their development leads to concerns about language homogenization.",
        "abstract": "In this paper, we examine Large Language Models (LLMs) as a new kind of medium\u2014in McLuhan\u2019s sense of the word\u2014and raise concerns about corporate control over language due to the centralization of LLM development. Citing examples of state, social, and commercial power over language, we explore how certain groups have historically determined the direction of linguistic evolution, and the consequences of this power. Finally, we consider language homogenization\u2014a subset of algorithmic monoculture in which a majority of text online is generated by models owned by a small group of profit-incentivized companies\u2014as one particular aspect of the medium that shapes readers' and writers' experiences of text production and consumption.",
        "decision": "Accept"
    },
    {
        "number": "30",
        "title": "Using Large Generative Models for Storyboarding: Challenges and Goals",
        "authorids": "~Zheng_Ning1|~Dingzeyu_Li2|~Toby_Jia-Jun_Li1",
        "authors": "Zheng Ning|Dingzeyu Li|Toby Jia-Jun Li",
        "keywords": "Storyboarding|creative tool|large generative models",
        "TL;DR": "",
        "abstract": "Storyboard creation is a valuable but tedious process in producing video content. However, with recent advances in large generative models (LGMs), we have seen great potential in using a human-AI collaboration way to facilitate this process. In this position paper, we discuss the unique characteristics of storyboarding and highlight the challenges and goals for using LGMs in this domain.",
        "decision": "Accept"
    },
    {
        "number": "34",
        "title": "Decoding the End-to-end Writing Trajectory in Scholarly Manuscripts",
        "authorids": "~Ryan_Hyunkyo_Koo1|~Anna_Martin1|~Linghe_Wang2|~Dongyeop_Kang2",
        "authors": "Ryan Hyunkyo Koo|Anna Martin|Linghe Wang|Dongyeop Kang",
        "keywords": "writing assistant|scholarly writing|dataset",
        "TL;DR": "We present an original dataset and novel taxonomy describing the end-to-end writing process for scholarly writing to understand the writer's intentions at different points of the writing stage.",
        "abstract": "Scholarly writing presents a complex space that generally follows a methodical procedure to plan and produce both rationally sound and creative compositions. Recent works involving large language models (LLM) demonstrate considerable success in text generation and revision tasks; however, LLMs still struggle to provide structural and creative feedback on the document level that is crucial to academic writing. In this paper, we introduce a novel taxonomy that categorizes scholarly writing behaviors according to intention, writer actions, and the information types of the written data. We also provide ManuScript, an original dataset annotated with a simplified version of our taxonomy to show writer actions and the intentions behind them. Motivated by cognitive writing theory, our taxonomy for scientific papers includes three levels of categorization in order to trace the general writing flow and identify the distinct writer activities embedded within each higher-level process. ManuScript intends to provide a complete picture of the scholarly writing process by capturing the linearity and non-linearity of writing trajectory, such that writing assistants can provide stronger feedback and suggestions on an end-to-end level. The collected writing trajectories are viewed at https://minnesotanlp.github.io/REWARD_demo/",
        "decision": "Accept"
    },
    {
        "number": "35",
        "title": "Augmenting Human-AI Co-Writing with Interactive Visualization",
        "authorids": "~Md_Naimul_Hoque1|~Niklas_Elmqvist1",
        "authors": "Md Naimul Hoque|Niklas Elmqvist",
        "keywords": "Creative Writing|Fiction Writing|NLP|Visualization",
        "TL;DR": "",
        "abstract": "Writing is a fundamental human activity\u2014but today we have the opportunity to leverage Natural Language Processing (NLP) methods to help in this endeavor. Recent tools go beyond mere grammatical error-checking and use Large Language Models (LLMs) to support human-AI co-writing. While existing tools are helpful, many challenges remain: (1) mitigating ownership tensions between humans and AI; (2) enabling human autonomy in the process; (3) creating mechanisms for writers to understand and explore the reasoning of AI; and (4) applying NLP to complex and abstract narrative components (e.g., characterization, events, dialogue).  In this paper, we hypothesize that some of these challenges can be resolved by introducing an communication interface between writers and AI. Further, we propose Interactive Visualization, a prominent method for making sense of complex AI reasoning and revealing hidden patterns from text data, to be that interface. To demonstrate our proposal, we present two case studies where we combine NLP and interactive visualization to support creative writing. The first case study is on mitigating social biases in fiction writing and the second is on the design of dynamic characters and scenes. We conclude by outlining our future work and broader impact.",
        "decision": "Accept"
    },
    {
        "number": "36",
        "title": "Towards Explainable AI Writing Assistants for Non-native English Speakers",
        "authorids": "~Yewon_Kim1|~Mina_Lee1|~Donghwi_Kim1|~Sung-Ju_Lee1",
        "authors": "Yewon Kim|Mina Lee|Donghwi Kim|Sung-Ju Lee",
        "keywords": "AI writing assistants|non-native English speakers|human-AI interaction",
        "TL;DR": "We discuss the challenges non-native speakers face when paraphrasing with AI writing assistants, and suggest design implications to enhance the explainability of these tools.",
        "abstract": "We highlight the challenges faced by non-native speakers when using AI writing assistants to paraphrase text.  Through an interview study with 15 non-native English speakers (NNESs) with varying levels of English proficiency, we observe that they face difficulties in assessing paraphrased texts generated by AI writing assistants, largely due to the lack of explanations accompanying the suggested paraphrases. Furthermore, we examine their strategies to assess AI-generated texts in the absence of such explanations. Drawing on the needs of NNESs identified in our interview, we propose four potential user interfaces to enhance the writing experience of NNESs using AI writing assistants. The proposed designs focus on incorporating explanations to better support NNESs in understanding and evaluating the AI-generated paraphrasing suggestions.",
        "decision": "Accept",
        "arxiv": "https://arxiv.org/abs/2304.02625",
    },
    {
        "number": "37",
        "title": "Using writing assistants to accelerate the peer review process",
        "authorids": "~Shiping_Chen1|~Duncan_Brumby1|~Anna_Cox1",
        "authors": "Shiping Chen|Duncan Brumby|Anna Cox",
        "keywords": "Writing assistant|peer review",
        "TL;DR": "Writing assistants for peer review",
        "abstract": "With the rapidly increasing number of submissions, challenges emerge in the peer review process. It is therefore necessary to support reviewers so that they can complete review tasks efficiently. By participating in this workshop, we hope to discuss and exchange ideas on how to better design writing assistants to meet the needs of reviewers and how to integrate them with existing review systems and review tools. Our vision for the future is to develop writing assistant tools that can help reviewers produce high-quality reviews in less time and with reduced workload. ",
        "decision": "Accept"
    },
    {
        "number": "38",
        "title": "Pastiches, Distributions, and Appropriations in Writing Assistants: A Squib",
        "authorids": "~Jaylen_Pittman1",
        "authors": "Jaylen Pittman",
        "keywords": "",
        "TL;DR": "",
        "abstract": "Discussion of pastiches and the implications for minoritized language varieties.",
        "decision": "Accept"
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
    // if (paper.title === "Read, Revise, Repeat: A System Demonstration for Human-in-the-loop Iterative Text Revision") {
    //   p.append(' <span class="best">~*~best paper~*~</span> ');
    // }
    // if (paper["Paper type"] === "cross-sub") {
    //   p.append(' <span class="cross">~cross submission~</span> ');
    // } 
    
    var href = '../../assets/papers/paper' + paper.number.toString() + '_2023.pdf';
    
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
