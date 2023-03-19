<script>
</script>

<div class="flex flex-col text-white mx-auto">
  <img
    src="https://www.essec.edu/static/desktop/img/logo-01.6798fda26993.png"
    alt="essec loc"
    class="mt-2 mb-2 mx-auto"
  />

  <div class="text-center p-4 w-4/5 bg-gray-900 rounded-lg mx-auto mb-4 mt-4">
    <h1 class="font-bold">Bienvenue au Court Mais Trash!</h1>
    <br />
    <p>
      Le Court-Mais-Trash (CMT pour les intimes) est une plateforme qui regroupe
      l'ensemble des avis des étudiants de la Grande Ecole de l'ESSEC sur les
      cours dispensés.
    </p>
    <p>
      Il est parfois difficile de faire son choix dans un catalogue de plus de
      200 cours. C'est pourquoi le BDE ESSEC s'active chaque année pour
      récupérer un maximum d'avis, afin que tu puisses faire ton choix plus
      aisément.
    </p>
    <p>
      Le CMT <strong>n'est pas officiel</strong>. Les avis qui sont y récoltés
      ne proviennent pas de l'administration. Donc pas de langue de bois, tu
      t'exprimes comme tu le souhaites (toujours dans le respect d'autruit).
    </p>
    <p>
      Nous t'invitons bien évidemment à mettre tes avis. Venir récupérer des
      infos c'est bien, mais en donner soit même c'est pas mal aussi. Pas de
      panique, <strong>tout est anonyme !</strong>
    </p>
    <div class="cont">
      <a class="btn btn-dark btn-lg mx-auto mt-3" href="/cours" role="button"
        >Liste des Cours</a
      >
      <a class="btn btn-dark btn-lg mx-auto mt-3" href="/profs" role="button"
        >Liste des Profs</a
      >
    </div>
  </div>

  <div
    class="flex flex-col p-4 w-4/5 bg-gray-900 rounded-lg mx-auto mb-4 mt-4  items-center"
  >
    <div class="flex mx-auto gap-2 w-full h-40">
      <div class="bestC rounded-lg bg-gray-800 w-1/2 mx-auto p-2 text-center">
        <h4>Top 3 Cours</h4>
        <table class="table table-hover table-success">
          <thead>
            <tr class="w-full">
              <th scope="col">#</th>
              <th scope="col">Cours</th>
              <th scope="col">Note</th>
              <th scope="col">Nombre d'avis</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Negotiation Workshop</td>
              <td>9.67/10</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Economics of Financial Intermediation</td>
              <td>8/10</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Audit et Management</td>
              <td>8/10</td>
              <td>4</td>
            </tr>
          </thead>
          <tbody id="bestCourses" />
        </table>
      </div>

      <div class="worstC rounded-lg bg-gray-800 w-1/2 mx-auto p-2 text-center">
        <h4>Pires 3 Cours</h4>
        <table class="table table-hover table-danger w-full">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cours</th>
              <th scope="col">Note</th>
              <th scope="col">Nombre d'avis</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Marketing Management</td>
              <td>3/10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product Management</td>
              <td>3.67/10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Business Economics</td>
              <td>5.73/10</td>
              <td>11</td>
            </tr>
          </thead>
          <tbody id="worstCourses" />
        </table>
      </div>
    </div>

    <div class="flex mx-auto gap-2 w-full mt-2 h-40">
      <div class="bestP rounded-lg bg-gray-800 w-1/2 mx-auto  p-2 text-center">
        <h4>Top 3 Profs</h4>
        <table class="table table-hover table-success  w-full">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Prof</th>
              <th scope="col">Note</th>
              <th scope="col">Nombre d'avis</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Marwan Sinaceur</td>
              <td>9/10</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ingrid Nappi-Choulet</td>
              <td>9/10</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nicolas Poncet & Emmanuel Bollon</td>
              <td>8.5/10</td>
              <td>3</td>
            </tr>
          </thead>
          <tbody id="bestProfs" />
        </table>
      </div>

      <div class="worstP rounded-lg bg-gray-800 w-1/2 mx-auto  p-2 text-center">
        <h4>Pires 3 Profs</h4>
        <table class="table table-hover table-danger w-full">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Prof</th>
              <th scope="col">Note</th>
              <th scope="col">Nombre d'avis</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Albert Bemmaor</td>
              <td>2/10</td>
              <td>19</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anastasios Dosis</td>
              <td>4.56/10</td>
              <td>9</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Jerome Pouyet</td>
              <td>6.67/10</td>
              <td>3</td>
            </tr>
          </thead>
          <tbody id="worstProfs" />
        </table>
      </div>
    </div>
  </div>
</div>
