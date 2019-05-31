# friendFinder

### Overview

Compatibility-based "FriendFinder" application. This full-stack site takes in results from a users' surveys, then compare their answers with those from other users, and then, will display the name and picture of the user with the best overall match.

The user's most compatible friend is determined using the following as a guide:

   * Each user's results is converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * Then, it compares the difference between current user's scores against those from other users, question by question adding up the differences to calculate the total absolute difference.
   
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**

   * The closest match will be the user with the least amount of difference.
   
   [Click here to access the application (hosted in Heroku)](https://secure-escarpment-67865.herokuapp.com/)
