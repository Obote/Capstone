/* eslint-disable comma-dangle */
const staff = [
    {
      picture: './Assest/images/julio.jpg',
      alt: 'picture of Jeune Lio',
      name: 'Jeune Lio',
      job: 'Performing arstist',
      bio: 'Born in Cameroon and grew up in France, lio is one the Dj & Founder of la sunday Abidjan, Jeune Lio is eclectic dj playing from Hiphop, Afrobeat to afrohouse and dancehall. Jeune Lio is also a music producer and a music artistic director. He’s curently woking with two ivorian promising artist Diane DDDD and Ozaki.',
    },
    {
      picture: './Assests/images/Ohms-Law-Montana-1.jpg',
      alt: 'picture of Montana',
      name: 'Ohms Law Montana',
      job: 'Performing arstist',
      bio: 'Ohms Law Montana (Omar Omondi), is a Kenyan rapper and songwriter born and raised in a family of four boys by a single mother in Kisauni, one of Mombasa County’s most violent and crime infested areas.',
    },
    {
      picture: './Assests/images/adrian.jpg',
      alt: 'picture of Andrian Van WYK',
      name: 'Adrian Van WYK',
      job: 'Performing arstist',
      bio: 'As an avid traveler, Andrea believes no road trip is successful without getting lost at least once. Professionally though, she loves helping people find their way. Her background is in process, project, and people management. Outside of work, she can usually be found playing board games, hiking, or mastering new recipes.',
    },
    {
      picture: './Assests/images/BDK.jpeg',
      alt: 'picture of BDK',
      name: 'BDK',
      job: 'Performing arstist',
      bio: 'BDK, from Côte d’Ivoire, is a Video/Jockey who aims to promote music from the continent to the world. His unique style and his ability to remix global hits into something new and build unique mashups made him one of the most request DJs today in his country.',
    },
    {
      picture: './Assests/images/emmie.jpg',
      alt: 'picture of Emmie Muthiga',
      name: 'Emmie Muthiga',
      job: 'Performing arstist',
      bio: "Emmie Wanjiku Muthiga, stage name Emmie Muthiga, is a contemporary-pop recording and performing artist from Nairobi, Kenya. She is a spurring new comer within the Kenyan music industry and is best known for her song “Tusonge Mbele.",
    },
    {
      picture: './Assests/images/FAMAS.jpeg',
      alt: 'picture of FAMAS',
      name: 'FAMAS',
      job: 'Performing arstist,
      bio: "Famas, whose real name is Hacim Hassane Olivier COULIBALY, is a young artist born in 1994 in Abidjan, Ivory Coast.",
    },
  ];
  
  const staffContainerWrapper = document.querySelector(
    '.staff-container-wrapper'
  );
  
  function addStaffMember(staffMember) {
    const staffContainer = document.createElement('article');
    const staffInformation = document.createElement('div');
    const profilePicture = document.createElement('img');
    const staffIntroduction = document.createElement('div');
    const staffName = document.createElement('h4');
    const jobTitle = document.createElement('span');
    const bio = document.createElement('p');
  
    staffContainer.className = 'staff-container';
    staffInformation.className = 'staff-information';
    staffIntroduction.className = 'staff-introduction';
    staffName.className = 'staff-name';
    jobTitle.className = 'job-title';
    bio.className = 'bio';
  
    profilePicture.src = staffMember.picture;
    profilePicture.alt = staffMember.alt;
    staffName.textContent = staffMember.name;
    jobTitle.textContent = staffMember.job;
    bio.textContent = staffMember.bio;
  
    staffInformation.appendChild(profilePicture);
    staffIntroduction.appendChild(staffName);
    staffIntroduction.appendChild(jobTitle);
    staffIntroduction.appendChild(bio);
    staffContainer.appendChild(staffInformation);
    staffContainer.appendChild(staffIntroduction);
    staffContainerWrapper.appendChild(staffContainer);
  }
  
  staff.forEach((staffMember) => {
    addStaffMember(staffMember);
  });
  