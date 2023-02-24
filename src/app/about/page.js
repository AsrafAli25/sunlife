"use client";

import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";

const About = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <div>
            <label>
              <RadioButton
                name="gender"
                value="male"
                onChange={(e) => setGender(e.value)}
                checked={gender === "male"}
              />
              Male
            </label>
            <label>
              <RadioButton
                name="gender"
                value="female"
                onChange={(e) => setGender(e.value)}
                checked={gender === "female"}
              />
              Female
            </label>
          </div>
          {formErrors.gender && (
            <span className="error">{formErrors.gender}</span>
          )}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <Dropdown
            id="country"
            name="country"
            options={[
              { label: "USA", value: "USA" },
              { label: "Canada", value: "Canada" },
            ]}
            value={country}
            onChange={(e) => setCountry(e.value)}
            placeholder="Select a Country"
          />
          {formErrors.country && (
            <span className="error">{formErrors.country}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        reprehenderit cumque repudiandae iure officia minima cupiditate! Dicta
        asperiores distinctio ab ea ex. Eaque eius rerum odit ab pariatur,
        laborum esse aliquid nam, atque et molestiae mollitia alias a quasi quis
        nesciunt odio sequi asperiores saepe, fugiat quia aspernatur
        perferendis. Amet inventore ipsam dignissimos nesciunt ipsum tempore
        suscipit, excepturi, accusamus nisi in totam hic. Officia temporibus,
        laborum harum ipsam provident placeat minus expedita voluptatem
        laboriosam! Debitis aut sequi blanditiis necessitatibus modi minus
        beatae dicta odio veniam dolore. Libero dolorum mollitia, obcaecati quam
        magni ipsam blanditiis id culpa quod earum vero sunt assumenda quisquam
        ex dignissimos a atque, laboriosam ratione delectus ullam molestiae?
        Unde exercitationem quas, consequatur illo vitae autem hic velit
        cupiditate odio? Ipsum ipsa molestias officiis voluptatum, assumenda
        explicabo sapiente expedita, at aliquam ratione vero id et nulla
        possimus adipisci ut atque recusandae? Corrupti sint quaerat possimus
        officia ad voluptatibus harum soluta, cupiditate delectus veniam
        veritatis. Itaque iusto impedit ipsum totam mollitia id nisi similique
        reiciendis nihil sequi voluptatem, officia ab eum. Voluptates commodi in
        praesentium ad! In, natus tempore! Neque nobis, doloremque natus aliquid
        labore, nihil itaque qui, accusamus laboriosam at praesentium commodi
        placeat. Laudantium voluptate dolore dignissimos odio eligendi corporis
        consequatur deserunt at porro, laborum aspernatur quis iste, doloremque
        rem sequi nesciunt culpa qui quod error, facilis nobis ex magnam dicta
        beatae? Beatae reprehenderit quam, error reiciendis amet ad corporis
        aliquid consequatur inventore quis, fuga modi nihil eveniet sit deleniti
        iste perferendis accusantium id necessitatibus quasi animi voluptas
        magni! Consequatur quis esse voluptate assumenda saepe nostrum,
        perferendis consequuntur incidunt nulla non modi velit eaque laboriosam
        debitis placeat odit obcaecati error fugit. Quisquam voluptatem itaque,
        consequatur at sint magni numquam incidunt architecto perspiciatis iste
        dolor unde blanditiis nihil ratione corporis veritatis voluptates velit
        nesciunt reiciendis. Eveniet facere eius non vitae officia magnam
        dignissimos esse perferendis, excepturi reprehenderit minus quidem
        asperiores. Odit sequi fuga, officiis doloribus consequuntur sunt
        repellendus, quia ipsum ad itaque beatae explicabo! Explicabo nostrum
        vel ab rerum officia recusandae modi ipsum. Debitis facilis architecto
        inventore accusantium. Qui, alias? Commodi amet, cupiditate soluta
        nulla, obcaecati a sit eligendi iusto, animi in quam quidem blanditiis
        excepturi aut voluptatum labore cum beatae reiciendis aspernatur ipsam
        provident? Fugit quae autem impedit tempore deleniti quaerat cumque
        cupiditate eum nam doloribus officia minus reiciendis quia nulla quos
        corporis, voluptate sint ullam omnis pariatur harum illum? Sed at
        distinctio inventore alias culpa illum reprehenderit illo, quas rerum
        provident dolorum eos, repellendus sit minus suscipit quo dignissimos
        tempore iusto facere eveniet nam minima. Minima dolorem sapiente
        provident porro totam, repudiandae fugit perferendis non vel facilis
        recusandae corrupti animi consectetur consequatur impedit quo quos unde
        eligendi? Perferendis sed aperiam quis rerum laudantium quam amet ut
        enim ullam ad minima laborum voluptates possimus magni, ipsam tempore
        autem provident suscipit error! Quo consequatur dicta assumenda optio
        odit? Earum commodi sit laboriosam reprehenderit laudantium, aspernatur
        ex deleniti, sunt et ipsam qui, amet quam obcaecati ipsum id. Obcaecati,
        dolorem nostrum, natus provident ab hic omnis aut ipsa illo quam culpa.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam est
        autem sequi iusto, ducimus porro sed nemo distinctio magni odio commodi
        illum minima esse recusandae repellat ipsam modi consequuntur.
        Accusantium, quasi. Reiciendis sequi nulla provident itaque saepe
        accusantium dolores beatae eius molestias distinctio odit temporibus
        tempora cum officia aperiam reprehenderit, ipsa expedita aspernatur
        omnis cumque sint corporis hic laboriosam asperiores? Obcaecati quod non
        soluta natus aperiam, illum exercitationem optio ab consectetur a id
        enim, maxime debitis beatae corrupti quia nemo! Dolores corrupti nam
        culpa qui molestiae soluta, omnis fugiat reprehenderit? Soluta nostrum
        molestias ratione id provident tenetur expedita quis quos veniam aliquid
        blanditiis iste libero ex nihil ipsam maxime et, suscipit nisi quidem
        veritatis dolore quae, impedit ut. Facilis repellendus, doloremque
        accusamus odio optio vel asperiores, unde accusantium ea illo alias!
        Illo voluptatibus expedita quam aliquid recusandae accusamus
        praesentium, voluptatum consectetur, rerum veritatis, iusto libero
        fugit? Praesentium est animi dolor magni natus eaque harum modi labore?
        Illum esse deserunt unde, ducimus minus, animi quidem veritatis
        blanditiis fugiat soluta et maxime dicta alias, nihil ab nisi. Sit
        nesciunt suscipit aut illo. Quidem eveniet expedita provident sit quos,
        minus aliquid veritatis velit possimus maiores deserunt ratione? Cumque
        animi eum debitis, iusto itaque nulla corrupti architecto velit quo
        iste? Blanditiis consectetur libero iste minima molestiae? Ad atque
        minima pariatur. Quae ab dolor exercitationem eum. Molestias modi
        praesentium beatae impedit nostrum alias ad itaque iure rem cum quod
        delectus natus, ut eveniet ullam nisi nulla ratione accusantium sint
        nihil possimus exercitationem. Cum, in explicabo facere reprehenderit
        fugiat quos aliquid non sapiente? Porro, eius fuga? Ut consequatur eum
        natus laudantium, dignissimos corporis accusamus voluptates modi
        repudiandae, cumque facere, voluptatem distinctio! Consequatur facere
        porro harum explicabo! Architecto illo eum qui quod vero harum veritatis
        excepturi, accusamus reiciendis perferendis minima nobis laborum
        incidunt quia reprehenderit quo iusto hic itaque ipsam fugiat, nostrum
        est officia. Labore, similique deserunt temporibus totam nihil pariatur
        nostrum quo alias distinctio iusto dolores, facilis laborum, provident
        repellat amet voluptates dolorem ad saepe. Veniam quam officia ratione
        quas. Voluptatibus fugiat atque molestias iste tenetur aut eveniet
        totam, officiis nobis nulla vel at, minus dolor voluptatum ullam,
        expedita rem et. Ea deleniti tenetur tempora assumenda perspiciatis esse
        reiciendis architecto necessitatibus exercitationem nulla! Delectus unde
        repellat, eveniet dicta ratione iusto itaque! Accusamus, adipisci
        aspernatur veniam ipsum a harum accusantium quibusdam ipsa corporis
        maxime vitae tempora suscipit sint cupiditate fuga dolorum dicta labore
        fugiat, beatae eligendi amet quis sit. Corrupti, rem. Quibusdam,
        praesentium quod consequatur numquam fuga, exercitationem officia vel
        voluptatum ab necessitatibus ipsa non animi ipsam doloremque dignissimos
        maiores quisquam culpa reiciendis iusto autem natus pariatur. Voluptatem
        iure hic dolorem veniam, sunt id dignissimos aperiam quis numquam illo
        minus nostrum ipsa dolores! Neque nisi architecto aspernatur dolor omnis
        dolores enim provident corporis et cumque, rem eaque earum molestiae
        corrupti eligendi libero modi perspiciatis harum, doloremque expedita
        dolorum labore quam quo sapiente? Nemo nesciunt aspernatur deserunt
        libero fugit saepe tenetur numquam necessitatibus vitae doloribus
        perferendis quod optio autem dolores, unde, perspiciatis ipsum id non
        error. Autem esse molestias dolores cum, rerum expedita deleniti ullam
        animi hic tempore! Aliquam dolorum voluptate ea molestiae excepturi,
        eligendi molestias nesciunt eum! Non distinctio reprehenderit aliquid
        nam dolore maiores eligendi! Repellendus sapiente dolore delectus
        officiis voluptas, in assumenda minus, nemo at fugiat eveniet quis, iure
        explicabo iste ullam? Magnam quod veritatis incidunt eum distinctio
        architecto non quasi repellat quo aperiam facere, iusto eaque tenetur
        soluta, consectetur et reiciendis molestiae fuga. A, officia veritatis.
        Hic officia, sint mollitia minus suscipit repellat nemo aliquid
        perferendis, sequi nisi consequatur tempore ducimus fugit, provident
        praesentium. Officiis nostrum, a architecto quia minima tempore
        consequuntur, totam vero mollitia, laudantium placeat voluptatibus animi
        quos assumenda quis accusamus enim corporis deleniti ratione. Deleniti
        dolorum voluptatem quas minima nam. Explicabo veritatis corporis quidem
        aperiam ut incidunt quasi minus, iste numquam. Odit maiores possimus
        consequatur ducimus asperiores magnam porro eius ipsum cumque autem,
        ipsa omnis quod voluptate ab modi. Perferendis unde, accusantium
        repudiandae sapiente aut omnis tempore quae reprehenderit eius a, saepe
        sequi facilis cum. Sed nemo cum nisi, sit adipisci vitae! Magnam
        distinctio facilis error deleniti blanditiis suscipit ducimus accusamus
        impedit optio nobis repellat accusantium aspernatur, corrupti, delectus
        eius incidunt eligendi voluptatibus iure qui dolorum molestiae quibusdam
        porro. Nam quibusdam quod, aut cum consectetur officiis a commodi.
        Inventore sint iusto quasi quis assumenda quae vel, minima commodi
        doloremque ipsam sed nostrum neque nulla dignissimos recusandae,
        adipisci dolorem reprehenderit temporibus! Quo veritatis obcaecati at
        rerum. Beatae illo quas nihil laborum qui distinctio fuga alias
        voluptatum vel ipsum, aspernatur natus, quod a hic perspiciatis sequi
        corporis officia! Quibusdam doloremque sapiente reprehenderit
        perferendis ea asperiores excepturi ut nisi earum eos enim, unde vero
        iusto inventore, adipisci totam! Magnam et neque nemo nobis aspernatur
        illum sapiente illo nulla consectetur, doloribus minima id eius dicta
        sint commodi qui molestias sit? Aliquid rerum molestias aut dolorem!
        Officia error cupiditate ea, dolorum magni mollitia perspiciatis ratione
        tempora ab. Aut autem tempore modi id, minus asperiores excepturi sit
        quisquam facere et. In dolore quae laborum commodi porro animi pariatur
        deleniti minus nisi sequi voluptate eius neque dolores reiciendis dolor
        doloremque illum, nesciunt cupiditate perspiciatis quasi magnam sint?
        Unde sed quod dignissimos. Voluptates, aliquam quasi. Recusandae
        delectus porro, deleniti placeat vero consequuntur nostrum possimus odit
        iste sed voluptatum expedita dignissimos, rerum perferendis veniam
        nihil? Molestiae impedit dolorem unde quam culpa quasi vitae, id
        reiciendis porro perspiciatis aut, ut, necessitatibus sint est. Quis
        maxime tenetur suscipit eum perferendis exercitationem, soluta commodi,
        sunt praesentium non molestiae nobis vero, repellendus facere!
        Voluptatem sapiente exercitationem illum incidunt eveniet quasi
        praesentium dolorem voluptatibus. Tenetur deleniti est perferendis eos,
        molestias aspernatur quod voluptatem dolorem quia numquam! Dolorem
        aliquam tempora eos assumenda quibusdam, minus, fugiat optio facilis quo
        cupiditate esse delectus explicabo quia eum, fugit ipsum modi temporibus
        impedit perferendis laborum adipisci cum. Nemo porro quia rem error
        saepe iusto dolorem accusamus, facere voluptate inventore odit
        repudiandae laboriosam incidunt natus expedita architecto quasi dolores
        deserunt voluptatem aperiam ea odio non laborum nulla! Explicabo quo
        consequatur voluptate a, nihil pariatur atque quaerat dicta vero commodi
        fugiat, accusantium repellendus!
        <br />
        <br />
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
        consectetur. Recusandae hic quaerat labore tempore beatae atque sunt
        commodi perferendis voluptas? Omnis, quidem assumenda? Eos commodi
        minima laborum, provident voluptatibus sit optio voluptate architecto
        nemo quisquam, iure velit, libero atque impedit ut. Quam, itaque sit
        recusandae et tempore dolorum cumque labore, exercitationem a blanditiis
        ex doloribus voluptates magni laboriosam consectetur delectus quis.
        Maxime aut autem accusantium rerum, fugit amet accusamus consequatur
        enim cumque! Saepe, iure consequatur amet quidem magnam dicta qui itaque
        incidunt hic, sunt, minima temporibus maiores laboriosam et eveniet sed.
        Rem molestias totam nostrum qui? Minus pariatur aliquam eius eum magni
        sapiente a ut itaque, fuga reiciendis aspernatur rem alias doloribus cum
        laboriosam eaque totam corporis quae nostrum sint. Doloremque ab commodi
        consectetur sequi. Quaerat, odio magnam ab perferendis aliquid quidem
        unde quod amet quo expedita numquam eaque eius consectetur id commodi
        iste? Est dolor nisi corporis voluptatibus ducimus doloribus sed, omnis
        illum dolores ea numquam consequuntur quibusdam, ab inventore quos
        voluptates, corrupti possimus odio placeat illo explicabo
        exercitationem. Illum quis ipsum tempora quam culpa corrupti. Placeat
        velit voluptates laudantium hic totam aut adipisci molestiae impedit
        atque architecto? Quos explicabo distinctio quo recusandae excepturi
        consequatur possimus hic cupiditate, officia dignissimos at animi non
        iusto doloremque laboriosam et! Debitis error facere inventore, alias
        dolorem, sit at cupiditate et omnis quod culpa consectetur odio nulla
        labore magni! Velit quia cum temporibus sed itaque distinctio deserunt
        illo laudantium, reiciendis harum. Iusto, aut. Perferendis aspernatur
        voluptatum excepturi ipsa nam est dolorum ex quam exercitationem neque
        iste eius, praesentium modi alias officia! Assumenda quisquam beatae
        ducimus consectetur quas molestiae ab, omnis quae eius laudantium quasi
        saepe cum dolorem nisi ipsam accusamus nihil pariatur, ipsum molestias
        libero, optio voluptatum ratione deserunt minima? Deserunt, hic officiis
        nostrum corporis neque dolorum incidunt repudiandae deleniti facere
        nobis nulla obcaecati reprehenderit. Et officia officiis quaerat cum
        tempore id corrupti fugit reiciendis! Qui ducimus obcaecati modi nisi
        magni velit corporis distinctio vel harum non atque officiis magnam,
        repellat eum asperiores molestias voluptatem animi? Nostrum, nulla
        nihil? Soluta vitae nisi sint explicabo eum facere ratione commodi modi
        ullam, dicta, dolor nemo provident fugiat dolores! Facere repudiandae
        dolorem odit voluptas ratione aut dolores natus maiores iste nobis,
        dicta dignissimos, maxime reiciendis dolor sunt iure repellendus
        reprehenderit. Provident sapiente iure nulla voluptas ducimus, tenetur
        aliquam distinctio, molestias optio ipsam vitae, unde eos? Odit
        voluptates natus numquam mollitia molestiae ducimus vitae id odio
        maiores. Voluptas soluta incidunt ea porro rerum magnam similique,
        recusandae voluptatibus hic sunt provident sequi ipsum fugiat, adipisci
        numquam eius iure consequatur, nam eos debitis error! Cupiditate, atque
        alias velit eveniet laborum dolore quibusdam qui, voluptatibus error
        quisquam animi in placeat voluptate, maxime quam deleniti rem eum!
        Voluptate est vitae accusantium, culpa repellat asperiores inventore
        corrupti cumque, temporibus, blanditiis porro dolore voluptatibus in
        dolores aliquid sit iusto. Natus, expedita sed, aut officia aliquid
        fugit maiores, veniam voluptate autem dolores mollitia totam accusantium
        magnam debitis. Rem velit commodi, hic, asperiores quis quos cumque
        earum sequi quod inventore vel minima quidem veniam?
        <br />
        <br />
        <br />
        <br />
      </p>
    </>
  );
};

export default About;
