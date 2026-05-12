import c from '../app/assets/svg/skills/c.svg';
import django from '../app/assets/svg/skills/django.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';
import git from '../app/assets/svg/skills/git.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import python from '../app/assets/svg/skills/python.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'python':
      return python;
    case 'sql':
      return mysql;
    case 'c':
      return c;
    case 'django':
      return django;
    case 'fastapi':
      return fastapi;
    case 'postgresql':
      return postgresql;
    case 'mysql':
      return mysql;
    case 'mongodb':
      return mongoDB;
    case 'git':
      return git;
    case 'postman':
      return git; // fallback icon
    case 'linux':
      return linux;
    default:
      break;
  }
}
