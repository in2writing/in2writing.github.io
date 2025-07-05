const papers = [
  {
    number: 22,
    title:
      "Read, Revise, Repeat: A System Demonstration for Human-in-the-loop Iterative Text Revision",
    authorids:
      "~Wanyu_Du1|~Zae_Myung_Kim1|~Vipul_Raheja1|~Dhruv_Kumar2|~Dongyeop_Kang2",
    authors: "Wanyu Du|Zae Myung Kim|Vipul Raheja|Dhruv Kumar|Dongyeop Kang",
    keywords: "iterative text revision|human-computer interaction",
    "TL;DR":
      "This paper presents a human-in-the-loop iterative text revision system to achieve high quality text revisions with minimal human efforts.",
    abstract:
      "Revision is an essential part of the human writing process. It tends to be strategic, adaptive, and, more importantly, iterative in nature. Despite the success of large language models on text revision tasks, they are limited to non-iterative, one-shot revisions. Examining and evaluating the capability of large language models for making continuous revisions and collaborating with human writers is a critical step towards building effective writing assistants. In this work, we present a human-in-the-loop iterative text revision system, Read, Revise, Repeat (R3), which aims at achieving high quality text revisions with minimal human efforts by reading model-generated revisions and user feedbacks, revising documents, and repeating human-machine interactions. In R3, a text revision model provides text editing suggestions for human writers, who can accept or reject the suggested edits. The accepted edits are then incorporated into the model for the next iteration of document revision. Writers can therefore revise documents iteratively by interacting with the system and simply accepting/rejecting its suggested edits until the text revision model stops making further revisions or reaches a predefined maximum number of revisions. Empirical experiments show that R3 can generate revisions with comparable acceptance rate to human writers at early revision depths, and the human-machine interaction can get higher quality revisions with fewer iterations and edits. The collected human-model interaction dataset and system code are available at https://github.com/vipulraheja/IteraTeR.  Our system demonstration is available at https://youtu.be/lK08tIpEoaE. ",
    decision: "Accept",
  },
  {
    number: 21,
    title:
      "ChipSong: A Controllable Lyric Generation System for Chinese Popular Song",
    authorids:
      "~Nayu_Liu1|~Wenjing_Han2|~Guangcan_Liu6|~Da_Peng1|~Ran_Zhang5|~Xiaorui_Wang3|~Huabin_Ruan1",
    authors:
      "Nayu Liu|Wenjing Han|Guangcan Liu|Da Peng|Ran Zhang|Xiaorui Wang|Huabin Ruan",
    keywords:
      "lyric generation|word-level length format control|sentence-level length format control|open-ended trigger word control|rhyme control",
    "TL;DR":
      "An assisted Chinese lyric generation system oriented to the actual demands of musical short-video creators, which can achieve fine-grained control over lyric generation by the proposed control methods for format, trigger words, and rhyme.",
    abstract:
      "In this work, we take a further step towards satisfying practical demands in Chinese lyric generation from musical short-video creators, in respect of the challenges on songs' format constraints, creating specific lyrics from open-ended inspiration inputs, and language rhyme grace. One representative detail in these demands is to control lyric format at word level, that is, for Chinese songs, creators even expect fix-length words on certain positions in a lyric to match a special melody, while previous methods lack such ability. Although recent lyric generation community has made gratifying progress, most methods are not comprehensive enough to simultaneously meet these demands. As a result, we propose ChipSong, which is an assisted lyric generation system built based on a Transformer-based autoregressive language model architecture, and generates controlled lyric paragraphs fit for musical short-video display purpose, by designing 1) a novel Begin-Internal-End (BIE) word-granularity embedding sequence with its guided attention mechanism for word-level length format control, and an explicit symbol set for sentence-level length format control; 2) an open-ended trigger word mechanism to guide specific lyric contents generation; 3) a paradigm of reverse order training and shielding decoding for rhyme control. Extensive experiments show that our ChipSong generates fluent lyrics, with assuring the high consistency to pre-determined control conditions.",
    decision: "Conditional Accept",
  },
  {
    number: 20,
    "Paper type": 'cross-sub',
    title: "Sparks: Inspiration for Science Writing using Language Models",
    authorids: "~Katy_Ilonka_Gero1|~Vivian_Liu1|~Lydia_Chilton1",
    authors: "Katy Ilonka Gero|Vivian Liu|Lydia Chilton",
    keywords:
      "creativity support tools|writing support|co-creativity|science writing|natural language processing",
    "TL;DR":
      "System and study of language model outputs to support science writing.",
    abstract:
      "Large-scale language models are rapidly improving, performing well on a variety of tasks with little to no customization. In this work we investigate how language models can support science writing, a challenging writing task that is both open-ended and highly constrained. We present a system for generating \u201csparks\u201d, sentences related to a scientific concept intended to inspire writers. We run a user study with 13 STEM graduate students and find three main use cases of sparks---inspiration, translation, and  perspective---each of which correlates with a unique interaction pattern. We also find that while participants were more likely to select higher quality sparks, the overall quality of sparks seen by a given participant did not correlate with their satisfaction with the tool. ",
    decision: "Accept",
  },
  {
    number: 19,
    title:
      "Unmet Creativity Support Needs in Computationally Supported Creative Writing",
    authorids: "~Max_Kreminski1|~Chris_Martens2",
    authors: "Max Kreminski|Chris Martens",
    keywords:
      "mixed-initiative creativity tools|narrative generation|intelligent narrative technologies",
    "TL;DR":
      "We identify four key support needs for creative fiction writing, ground these needs in cognitive and theoretical literature, and survey computational narrative research that holds promise for supporting each of them in a co-creative setting.",
    abstract:
      "Large language models (LLMs) enabled by the datasets and computing power of the last decade have recently gained popularity for their capacity to generate plausible natural language text from human-provided prompts. This ability makes them appealing to fiction writers as prospective co-creative agents, addressing the common challenge of writer's block, or getting unstuck.  However, creative writers face additional challenges, including maintaining narrative consistency, developing plot structure, architecting reader experience, and refining their expressive intent, which are not well-addressed by current LLM-backed tools. In this paper, we define these needs by grounding them in cognitive and theoretical literature, then survey previous computational narrative research that holds promise for supporting each of them in a co-creative setting.",
    decision: "Conditional Accept",
  },
  {
    number: 16,
    "Paper type": 'cross-sub',
    title:
      "News Article Retrieval in Context for Event-centric Narrative Creation",
    authorids:
      "~Nikos_Voskarides1|~Edgar_Meij2|s.c.sauer@rug.nl|~Maarten_de_Rijke1",
    authors: "Nikos Voskarides|Edgar Meij|Sabrina Sauer|Maarten de Rijke",
    keywords: "narrative creation|event-centric narratives|supporting writers",
    "TL;DR":
      "We propose the task of news article retrieval in context for event-centric narrative creation, evaluate baselines and provide in-depth analysis on the characteristics of this task",
    abstract:
      "Writers such as journalists often use automatic tools to find relevant content to include in their narratives. In this paper, we focus on supporting writers in the news domain to develop event-centric narratives. Given an incomplete narrative that specifies a main event and a context, we aim to retrieve news articles that discuss relevant events that would enable the continuation of the narrative. We formally define this task and propose a retrieval dataset construction procedure that relies on existing news articles to simulate incomplete narratives and relevant articles. Experiments on two datasets derived from this procedure show that state-of-the-art lexical and semantic rankers are not sufficient for this task. We show that combining those with a ranker that ranks articles by reverse chronological order outperforms those rankers alone. We also perform an in-depth quantitative and qualitative analysis of the results that sheds light on the characteristics of this task.  (This is a cross-submission of a paper originally published at ACM ICTIR 2021)",
    decision: "Accept",
  },
  {
    number: 15,
    title:
      "Interactive Children\u2019s Story Rewriting Through Parent-Children Interaction",
    authorids: "~Yoonjoo_Lee1|~Tae_Soo_Kim3|~Minsuk_Chang1|~Juho_Kim2",
    authors: "Yoonjoo Lee|Tae Soo Kim|Minsuk Chang|Juho Kim",
    keywords:
      "interactive storytelling|story rewriting|question generation|text generation",
    "TL;DR":
      "Interactive system for story rewriting through parent-child interaction and AI assistance.",
    abstract:
      "Storytelling in early childhood provides significant benefits in language and literacy development, relationship building, and entertainment. To maximize these benefits, it is important to empower children with more agency. Interactive story rewriting through parent-children interaction can boost children's agency and help build the relationship between parent and child as they collaboratively create changes to an original story. However, for children with limited proficiency in reading and writing, parents must carry out multiple tasks to guide the rewriting process, which can incur a high cognitive load. In this work, we introduce an interface design that aims to support children and parents to rewrite stories together with the help of AI techniques. We describe three design goals determined by a review of prior literature in interactive storytelling and existing educational activities. We also propose a preliminary prompt-based pipeline that uses GPT-3 to realize the design goals and enable the interface.",
    decision: "Conditional Accept",
  },
  {
    number: 14,
    "Paper type": 'cross-sub',
    title:
      "The Pure Poet: How Good is the Subjective Credibility and Stylistic Quality of Literary Short Texts Written with an Artificial Intelligence Tool as Compared to Texts Written by Human Authors?",
    authorids:
      "~Vivian_Emily_Gunser1|s.gottschling@iwm-tuebingen.de|b.brucker@iwm-tuebingen.de|sandra.richter@dla-marbach.de|dilan.cakir@dla-marbach.de|p.gerjets@iwm-tuebingen.de",
    authors:
      "Vivian Emily Gunser|Steffen Gottschling|Birgit Brucker|Sandra Richter|D\u00eelan Canan Cakir|Peter Gerjets",
    keywords: "Cognition|Artificial Intelligence|Literature|NLP|GPT-2",
    "TL;DR":
      "Credibility and Stylistic Quality of Literary Short Texts Written with an Artificial Intelligence Tool ",
    abstract:
      "The application of artificial intelligence (AI) for text generation in creative domains raises questions regarding the credibility of AI-generated content. In two studies, we explored if readers can differentiate between AI-based and human-written texts (generated based on the first line of texts and poems of classic authors) and how the stylistic qualities of these texts are rated. Participants read 9 AI-based continuations and either 9 human-written continuations (Study 1, N=120) or 9 original continuations (Study 2, N=302). Participants' task was to decide whether a continuation was written with an AI-tool or not, to indicate their confidence in each decision, and to assess the stylistic text quality. Results showed that participants generally had low accuracy for differentiating between text types but were overconfident in their decisions. Regarding the assessment of stylistic quality, AI-continuations were perceived as less well-written, inspiring, fascinating, interesting, and aesthetic than both human-written and original continuations. ",
    decision: "Conditional Accept",
  },
  {
    number: 13,
    "Paper type": 'cross-sub',
    title: "Text Revision by On-the-Fly Representation Optimization",
    authorids: "~Jingjing_Li6|~Zichao_Li3|~Tao_Ge1|~Irwin_King1|~Michael_Lyu1",
    authors: "Jingjing Li|Zichao Li|Tao Ge|Irwin King|Michael Lyu",
    keywords:
      "text revision|text style transfer|text simplification|unsupervised text generation",
    "TL;DR": null,
    abstract:
      "Text revision refers to a family of natural language generation tasks, where the source and target sequences share moderate resemblance in surface form but differentiate in attributes, such as text formality and simplicity. Current state-of-the-art methods formulate these tasks as sequence-to-sequence learning problems, which rely on large-scale parallel training corpus. In this paper, we present an iterative in-place editing approach for text revision, which requires no parallel data. In this approach, we simply fine-tune a pre-trained Transformer with masked language modeling and attribute classification. During inference, the editing at each iteration is realized by two-step span replacement. At the first step, the distributed representation of the text optimizes on the fly towards an attribute function. At the second step, a text span is masked and another new one is proposed conditioned on the optimized representation. The empirical experiments on two typical and important text revision tasks, text formalization and text simplification, show the effectiveness of our approach. It achieves competitive and even better performance than state-of-the-art supervised methods on text simplification, and gains better performance than strong unsupervised methods on text formalization.",
    decision: "Accept",
  },
  {
    number: 10,
    title:
      "Plug-and-Play Controller for Story Completion: A Pilot Study toward Emotion-aware Story Writing Assistance",
    authorids:
      "~Yusuke_Mori1|~Hiroaki_Yamane1|~Ryohei_Shimizu1|~Tatsuya_Harada1",
    authors: "Yusuke Mori|Hiroaki Yamane|Ryohei Shimizu|Tatsuya Harada",
    keywords:
      "Story Completion|Emotions|Plug-and-Play Language Models|Writing Assistance",
    "TL;DR":
      "We apply plug-and-play module to story completion task, aiming emotion-aware story writing assistance.",
    abstract:
      "Emotions are essential for storytelling and narrative generation, and as such, the relationship between stories and emotions has been extensively studied. The authors of this paper, including a professional novelist, have examined the use of natural language processing to address the problems of novelists from the perspective of practical creative writing. In particular, the story completion task, which requires understanding the existing unfinished context, was studied from the perspective of creative support for human writers, to generate appropriate content to complete the unfinished parts. It was found that unsupervised pre-trained large neural models of the sequence-to-sequence type are useful for this task. Furthermore, based on the plug-and-play module for controllable text generation using GPT-2, an additional module was implemented to consider emotions. Although this is a preliminary study, and the results leave room for improvement before incorporating the model into a practical system, this effort is an important step in complementing the emotional trajectory of the story.",
    decision: "Conditional Accept",
  },
  {
    number: 8,
    title: "Language Models as Context-sensitive Word Search Engines",
    authorids:
      "~Matti_Wiegmann1|~Michael_V\u00f6lske1|~Benno_Stein2|~Martin_Potthast1",
    authors: "Matti Wiegmann|Michael V\u00f6lske|Benno Stein|Martin Potthast",
    keywords: null,
    "TL;DR": null,
    abstract:
      "Context-sensitive word search engines are writing assistants that support word choice, phrasing, and idiomatic language use by indexing large-scale n-gram collections and implementing a wildcard search. However, search results become unreliable with increasing context size (e.g., n>=5), when observations become sparse. This paper proposes two strategies for word search with larger n, based on masked and conditional language modeling. We build such search engines using BERT and BART and compare their capabilities in answering English context queries with those of the n-gram-based word search engine Netspeak. Our proposed strategies score within 5 percentage points MRR of n-gram collections while answering up to 5 times as many queries.",
    decision: "Accept",
  },
  {
    number: 7,
    title:
      "A text-writing system for Easy-to-Read German evaluated with low-literate users with cognitive impairment",
    authorids: "~Ina_Steinmetz1|~Karin_Harbusch1",
    authors: "Ina Steinmetz|Karin Harbusch",
    keywords:
      "Easy-to-Read German|Leichte Sprache|Natural Language Generation|NLG|paraphrase generation|scaffolded writing|accessible design|low-literate users|accessible writing system for low-literate users|writing system for users with intellectual or develeopmental disabilities (IDD)",
    "TL;DR":
      "We present a text-writing system for  Easy-to-Read German designed for low-literate users with intellectual or developmental disabilities and/or complex communication needs..",
    abstract:
      "Low-literate users with intellectual or developmental disabilities (IDD) and/or complex communication needs (CCN) require specific writing support. We present a system that interactively supports fast and correct writing of a variant of Leichte Sprache (LS; German term for easy-to-read German), slightly extended within and beyond the inner-sentential syntactic level. The system provides simple and intuitive dialogues for selecting options from a natural-language paraphrase generator. Moreover, it reminds the user to add text elements enhancing understandability, audience design, and text coherence. In earlier development phases, the system was evaluated with different groups of substitute users. Here, we report a case study with seven low-literate users with IDD.",
    decision: "Conditional Accept",
  },
  {
    number: 6,
    "Paper type": 'cross-sub',
    title:
      "A Selective Summary of Where to Hide a Stolen Elephant: Leaps in Creative Writing with Multimodal Machine Intelligence",
    authorids:
      "~Nikhil_Singh2|~Guillermo_Bernal1|daria_savchenko@g.harvard.edu|~Elena_Glassman1",
    authors: "Nikhil Singh|Guillermo Bernal|Daria Savchenko|Elena Glassman",
    keywords:
      "creativity support|story|writing|multimodal|audio|images|audiovisual|interface|AI|human-AI interaction",
    "TL;DR": null,
    abstract:
      "While developing a story, novices and published writers alike have had to look outside themselves for inspiration. Language models have recently been able to generate text fluently, producing new stochastic narratives upon request. However, effectively integrating such capabilities with human cognitive faculties and creative processes remains challenging. We propose to investigate this integration with a multimodal writing support interface that offers writing suggestions textually, visually, and aurally. We conduct an extensive study that combines elicitation of prior expectations before writing, observation and semi-structured interviews during writing, and outcome evaluations after writing. Our results illustrate individual and situational variation in machine-in-the-loop writing approaches, suggestion acceptance, and ways the system is helpful. Centrally, we report how participants perform integrative leaps, by which they do cognitive work to integrate suggestions of varying semantic relevance into their developing stories. We interpret these findings, offering modeling and design recommendations for future creative writing support technologies.",
    decision: "Accept",
  },
  {
    number: 5,
    title:
      "A Design Space for Writing Support Tools Using a Cognitive Process Model of Writing",
    authorids:
      "~Katy_Ilonka_Gero1|~Alex_Calderwood2|~Charlotte_Li1|~Lydia_Chilton1",
    authors: "Katy Ilonka Gero|Alex Calderwood|Charlotte Li|Lydia Chilton",
    keywords:
      "writing support tools|natural language processing|natural language generation|human-computer interaction|creativity support tools",
    "TL;DR": null,
    abstract:
      "Improvements in language technology have led to an increasing interest in writing support tools.  In this paper we conduct a systematic review of computer science papers that present and/or study such tools. We analyze 30 papers from the last five years using a cognitive process model of writing, which proposes three distinct processes: planning, translating, and reviewing. We plot the papers in a design space based on which cognitive process is supported and how constrained the writing goal is. Our analysis shows that highly constrained planning and reviewing are under-studied areas that recent technology improvements may now be able to serve. We also propose shared evaluation methodologies and tasks that may help the field mature.",
    decision: "Accept",
  },
  {
    number: 4,
    title: "Data-to-text systems as writing environment",
    authorids:
      "~Adela_Schneider1|~Andreas_Madsack1|~Johanna_Heininger1|~Ching-Yi_Chen2|~Robert_Wei\u00dfgraeber1",
    authors:
      "Adela Schneider|Andreas Madsack|Johanna Heininger|Ching-Yi Chen|Robert Wei\u00dfgraeber",
    keywords: "natural language generation|data-to-text|writing process",
    "TL;DR":
      "Data-to-Text systems represent a new type of writing technology and for this the systems also function as writing environment. What factors facilitate the writing in this environment?",
    abstract:
      "Today, data-to-text systems are used as commercial solutions for automated text production of large quantities of text. Therefore, they already represent a new technology of writing. This new technology requires the author, as an act of writing, both to configure a system that then takes over the transformation into a real text, but also to maintain strategies of traditional writing. What should an environment look like, where a human guides a machine to write texts? Based on a comparison of the NLG pipeline architecture with the results of the research on the human writing process, this paper attempts to take an overview of which tasks need to be solved and which strategies are necessary to produce good texts in this environment. From this synopsis, principles for the design of data-to-text systems as a functioning writing environment are then derived.",
    decision: "Accept",
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
    if (paper.title === "Read, Revise, Repeat: A System Demonstration for Human-in-the-loop Iterative Text Revision") {
      p.append(' <span class="best">~*~best paper~*~</span> ');
    }
    if (paper["Paper type"] === "cross-sub") {
      p.append(' <span class="cross">~cross submission~</span> ');
    } 
    var href = '../../assets/papers/paper' + paper.number.toString() + '.pdf?v=1653323402036'
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
