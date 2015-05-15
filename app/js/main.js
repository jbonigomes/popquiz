$('document').ready(function() {

  // Our data
  var questions = [{
    question: 'Information Systems Importance',
    color: 'yellow',
    subquestions: [{
      question: 'a) List three reasons why information systems are important in modern society.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Describe the two most important causes of information systems failure in your opinion, and give two examples of high profile IT project failures, indicating what went wrong.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Who was Charles Babbage, and what was the Difference Engine?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Freedom of Information',
    color: 'blue',
    subquestions: [{
      question: 'a) What is the purpose of the Freedom of Information (FoI) Act 2000 and who does it apply to?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) What are the grounds for complaint under the FoI Act?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Where can one typically find information about an organisation’s commitment to the FoI Act? What are Birkbeck’s obligations under the FoI Act?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'd) Doc Sportello is a private individual who wants to know more about the Gravity Rainbow project, a high value UK trade deal to sell rockets to the Ruritanians. This has been widely reported in the press, although the sale is still being debated in Parliament. Can the FoI Act help Doc?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'You work for a software company that is developing bespoke software for Teledyne Corporation, a robotics firm. The contract for this work is in two phases: the first, a time and materials (T&M) contract to agree project scope and a work plan; and the second phase a fixed price contract for the actual development work.',
    color: 'green',
    subquestions: [{
      question: 'a) Explain the difference between a T&M and Fixed Price contract.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Why it is of benefit both to you AND to Teledyne to contract in this way?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) During the project you develop new unique code for Teledyne. Describe three ways in which such Intellectual Property is protected and identify which is most appropriate in this case.',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Data Protection',
    color: 'red',
    subquestions: [{
      question: 'a) Alice wants to build a client mailing list for her new online book store and wonders if Data Protection laws are relevant to her business. Can you provide four Data Protection principles that apply to her case?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Alice wants to know if there are other regulations that apply to her new online business, particularly around contracting. What is your advice?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Software Engineering Profession',
    color: 'purple',
    subquestions: [{
      question: 'a) Describe clearly the pros and cons for regulation of the software engineering profession.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) State exactly what reserving ‘title’ and ‘function’ of a profession means, providing an example of a profession for which both title and function are reserved.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) In 2010, Google was sued by Viacom for infringement of copyright by its subsidiary YouTube. Describe the legal argument at the base of the litigation and the outcome.',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Data Protection',
    color: 'red',
    subquestions: [{
      question: 'a) What is the purpose of data protection legislation? Describe four of the principles that underpin data protection legislation in the UK.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) What does the Privacy and Electronic Communications Regulation 2003 cover? What do the amended regulations say about website cookies?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) What is the purpose of Freedom of information regulation in the UK and who does it apply to? What are the Environmental Information Regulations for?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Information Systems Importance',
    color: 'yellow',
    subquestions: [{
      question: 'a) The National Programme for IT comprised a series of IS projects designed to provide modern IS for the NHS in the UK. The programme was terminated in 2011, and was widely regarded as an example of a failed IS programme. Write a short essay (2 pages) describing why this programme is of interest to IS professionals. You should refer to the importance of IS systems in society, reasons for failure and implications on IS professionalism.',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Intellectual Property',
    color: 'orange',
    subquestions: [{
      question: 'a) Your friend Steve Gates has developed new software to control how printers optimise use of ink. He doesn’t know how to protect his innovation and comes to you for advice. What can you tell him about the pros and cons of copyrighting and patenting software?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Steve’s day job is with Applesoft, and he mentions that he actually developed his new software as a bespoke solution for an Applesoft client, but that the client has told him it has no interest in exploiting this invention. How does this colour your advice for Steve?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Intellectual Property',
    color: 'orange',
    subquestions: [{
      question: 'a) What is Intellectual Property (IP) (provide some examples)? What are the three ways in which IP can be protected in the law?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) What is Internet governance and what types of issues is it concerned with? Which bodies oversee Internet governance?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Write a short essay concerning the rules and practices that concern the use of e-mail and Internet by employees, describing such aspects as the rights and obligations of employers, when an employee’s account can be monitored, and other guidelines that are usually followed.',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Software Engineering Profession',
    color: 'purple',
    subquestions: [{
      question: 'a) Some people believe that the IS profession should be regulated, and the title of software engineer reserved. Describe exactly what reserving title and function mean, and set out your views on the advantages and disadvantages of this proposal.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Your friend has put together an album of family photos that she wants to put on Facebook. She’s used a U2 song as a background music track for the album slide show. What advice could you give her about this? What is YouTube’s position on copyright infringement?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Your software company is selected to develop a bespoke software programme for a small insurance firm. You agree with your client to contract for this work in two phases: the first, a time and materials (T&M) contract for a short scoping exercise at the beginning of the project to agree a work plan; and the second phase a fixed price contract for the actual development work.',
    color: 'green',
    subquestions: [{
      question: 'a) Explain the difference between a T&M and Fixed Price contract;',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Why it is of benefit to you AND to your client to contract in this way?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) During the development phase, the client asks for a new function, not specified in the original requirement. How do you deal with this contractually?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Your local Council has decided to close the library in your neighbourhood and open a swimming pool in its place. Your neighbour is angered by this and wants to find out how the Council came to this decision. She believes she can use Freedom of Information Act to get disclosure and asks you for help about this legislation.',
    color: 'blue',
    subquestions: [{
      question: 'a) Describe the purpose of the UK Freedom of information Act, 2000; who it applies to; and what bodies it excludes',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Your neighbour asks about the publication scheme. Describe what this is and what type of information should be contained in the Council’s publication scheme.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Provide some guidance to your neighbour about what response she can expect from the Council and under what circumstances she can complain if she is unhappy with the information provided.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'd) How might the Environmental Information Regulations, 2004 help your neighbour’s investigations with regard to the swimming pool?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Computer Misuse',
    color: 'dark',
    subquestions: [{
      question: 'a) Your security software identifies that your computer has been accessed by someone with an IP address outside the EU. On examination, you determine that none of your files have been changed or erased in any way, and your computer is clear of malware. Explain what offences described in the Computer Misuse Act, 1990 might be of use to you in prosecuting the hacker. Point out also some of the ways in which the current legislation on computer misuse might be of limited value.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) What does Part 5 of the Police & Justice Bill, 2006 contain and what do these provisions do?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'E-Commerce',
    color: 'pastel',
    subquestions: [{
      question: 'a) What is e-commerce? Describe what is meant by ‘B2B’, B2C’ and ‘C2C’.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) List some of the provisions in the Consumer Protection (Distance Selling) Regulations, 2000 that help protect consumers transacting business on the Internet.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Describe the objectives of the European Charter of Rights of Citizens in the Knowledge Society, 2006.',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Intellectual Property',
    color: 'orange',
    subquestions: [{
      question: 'a) Define what is meant by Intellectual Property (IP) and provide some examples. What are three ways in which IP can be protected in the law?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) You are an employee of Softco, a company that develops a bespoke funds transfer software application for a bank. Your role is to develop the code for the module that calculates commission; you do this by using a combination of custom and open-source code, and your work is acknowledged as an original and valuable contribution. In this situation, describe how ownership of IP is assigned. Do you have a claim to IP?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) In 2010, Google was sued by Viacom for infringement of copyright by its subsidiary YouTube. Discuss the pros and cons of this case, indicating whether - in your opinion - the judgement was fair.',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Challenges in Software Development',
    color: 'yellow',
    subquestions: [{
      question: 'a) Describe briefly the importance of information systems. Describe some of the causes of information systems failure.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Describe the Child Support Agency CS2 project in the UK and suggest some of the causes of failure.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Why do you think information systems are poorly understood by the public?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'The IT Profession',
    color: 'purple',
    subquestions: [{
      question: 'a) What are the key characteristics and functions of a profession in the UK? List some of the professional bodies in computing in the USA and the UK.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) Describe what is meant by a reserved title when used in the context of a particular profession, and provide an example. Describe what is meant by a reserved title and function, and provide an example.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Describe some of the issues associated with reserving the software engineering title and function.',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Freedom of Information',
    color: 'blue',
    subquestions: [{
      question: 'a) What is the purpose of the Freedom of Information Act 2000? In the UK, who does it apply to? What bodies does it exclude?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) List five of the `absolute exemptions` from the Act.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) What is a publication scheme? What are the grounds under which a citizen can complain that their Freedom of Information request has not been answered?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Data Protection',
    color: 'red',
    subquestions: [{
      question: 'a) Describe four of the principles that underpin data protection legislation in the UK.',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) What does the Privacy and Electronic Communications Regulations 2003 cover, as regards telecommunication network and service providers only?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Which UK agency is responsible for data protection?',
      answer: 'I don\'t know yet'
    }]
  },
  {
    question: 'Intellectual Property in IT',
    color: 'orange',
    subquestions: [{
      question: 'a) What is Intellectual Property (IP) (provide some examples)? What are the three ways in which IP can be protected in the law?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'b) In bespoke software development, who owns the IP? What are the exceptions?',
      answer: 'I don\'t know yet'
    },
    {
      question: 'c) Can software be patented? What is the difference on software patenting between the USA and Europe?',
      answer: 'I don\'t know yet'
    }]
  }];

  // Let's make the page refreshes re-usable
  function pickRandomQuestion() {
    var data = questions[Math.floor(Math.random() * (questions.length - 1)) + 1];

    $('body').removeClass().addClass(data.color);
    $('#question').removeClass().addClass(data.color);

    $('#answers .container').html('');
    $('#question .container h1').html(data.question);

    data.subquestions.forEach(function(subquestion) {
      var html = '' +
        '<div>' +
          '<h2>' + subquestion.question + '</h2>' +
          '<h3>' + subquestion.answer + '</h3>' +
        '</div>';

      $('#answers .container').append(html);
    });
  }

  pickRandomQuestion();

  // A couple of event listeners
  $('#question .refresh').on('click', 'i', function() {
    pickRandomQuestion();
  });

  $('#answers').on('click', '.container > div', function() {
    $('h3').removeClass();
    $(this).find('h3').addClass('active');
  });

  // The all page
  questions.forEach(function(question, i) {
    $('#allquestions .container').append('<h2>' + (i+1) + ') ' + question.question + '</h2>');
  });

});