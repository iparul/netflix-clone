import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Player.css";
let trailer = [
  "https://imdb-video.media-imdb.com/vi63356441/1434659607842-pgv4ql-1589994136439.mp4?Expires=1677763154&Signature=kg0vpPwBspfOZYtn6LkqhxEqwaNDtplojxGqQILc5Wys9zcfaDrf6BEPsBcssu8mt6lxJkoZQIFxH9L0-52jOeY9qMvs-7286NHA9PDye2JRBjlB4yihkJk233m6mzVrxQSOr3Wd6zL3ONljSIQq~eMF~bOiFDd~FzIM86WvWdx~JDlK2ZZM9FuSDPiRdY~jxoWr5xkSdBwcMM4UAB9rXIulz6ezcVmuRtpuiLPhkCvxioZuT776ncqKljUErOxe82KzGkdv9qtfrf9RAoOHjM2PCnldOTaMyjTXCmKF7fASB8abwmQsVHbNezCMA0HqJ~Gdy8Zlq7fppjMJ2UjxIg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi554943001/1434659607842-pgv4ql-1658938119009.mp4?Expires=1677760273&Signature=eVT5whbRSPM88mJ682DX9DSlLps8~OUdVNP3MLiquyCF7m6KzNrLMSP9fHnHM6u99qWzeB8f2FVJ0L14RM6PhQSGGNCcO6zl6kzyB2nMXKBU7Aoh6PTa5KfEnYkbzNOiBHoRy4FNl5cYUMRiCk3NdHylMGxTq3NXGN-oj~T8caxwB~f~9uekB6aFI8aL~5gs44JXSAlCmvldsXlENHWlZ3T0MlYg74rhiAYrIzUD4J3df5IASE5xtNXOEj7HMR1kYlL7i1gEGR0379GnKIzMK4XB1Gr43BsGQMNY28~Acin-UdLGy6pvXufUlS9dpwjsBZV78G6lQdxr9~jbKZUKWw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi4240746009/1434659607842-pgv4ql-1563699164137.mp4?Expires=1677763415&Signature=fmCaxXiIOw4WwGWbl~VADGTIuXJIL2KFe2lTtLlTbffEnCgWsoKUGQlmY5ZIfD1qX-fAt85KXPHYfe8rSRVqW-Czfmn2K7FB1bEi1p7fgNM4JdHhqwmUgIF2XNzIa-EncK0YwTWN4m6mbqHd6ji1x6ry86~D2Dc6vxQcVUKs38Jjk5WmJgdt2iQnLejla5sBl3yWQ187QzyW7to4qAwXN7-tOye48UHDC4biVlGypDWrCDIaYkB2nxQEzKlFzV6pZZF9Q3vr13NmuhnU-oBDifeX66jVwdtdajB5cEgWBCieFER9T8A2A8hC9IMf7UDQP5J7oVJgG7J-76fdmir~3g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi2686888217/1434659607842-pgv4ql-1564151957171.mp4?Expires=1677764029&Signature=mdvXNJHlOXNk3l1FC9UIrGhpIflanAXBI5ARCiczhhYngR4ZRWJo~-LiasQvUtt2xFfMaV04puRt1W23-2DhhCMS2vIYkEmHipt8d09XcowJn~s2rhxYlWGH-oDuoosqMavdrZAzpO8li~jFOy1dzarik7C0PaIIV4BzEtqMFg1YrzdiWQEGy3IopfKFR5iU13nktu51DK-ey2aoS4Fp-KM2RyoUEmzImj2gk2ZbfHWiNp5qeohdo7bgnFljIPdBTwy4TqR6jcn~C-jA3h2M7yfb1tkxZNsjPK8hCpxGCSd~gYain~BDu~A1TZq9ASGlR55v148uxtNWXSETd1FDXg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi602522137/1434659607842-pgv4ql-1654536060777.mp4?Expires=1677764153&Signature=CC6HIwJSsyegAh34C4HkJYQavQIuxciwdNriUqyDArxJGHoyroVW39Z-oQmyBCNcXGxcS8nCbU~M-xsGK0qQkCxypW2bwMQoudr278hmjEszsi6WX9-n5LH28lXeUaQb9edGEpt1KzbkqxRuclxGuHYDcHcbWMIuDFIjTcaxSTCRO8A8phh9mKaREGrN30fWNADlEqtb3d6~lC6NjZhyKQhwTMs01tooww2RVvK7BcKjv8yjjrDPY16Gw52OS13lYHzZKnjs5WGkuitn0c768oZed32WhuVxBJOJLdAm9MFXpOP6dN1z7Iw9JAULYKti0Vp9sz-qajNBiATiqJqL2A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi2020065817/1434659607842-pgv4ql-1661782648378.mp4?Expires=1677764219&Signature=GDg62PmcRheKgn8X7j3IGT~OUQur~AEhBcvo0NzwoFVMLnjSoK4wCO8aZ~1gplikv~IFxroGuZDhfA500SZM5Ab4aZSaaVc7vQ4pQgcGAtM1rjph7F9gdrxD5j2cQn3E1oVmuXpIFpwlk6TNPwsOFO8u-6vx4yJ1U7TGt15MPs~eFsM7dFcg-QuZwlKSFF5fqW7bm4l2Qvna48HvqGQT9LvYD-~DWdMWd4nKfKYUamLqH840xJvCPg2udsp1SllezD0EutgVnsty4l1cyaIYKO28uWGSUgLyCkFUsWNMR46Ano13zDutOi1ZpB9HFmNwPEqzCpN4ks~NmoEkrf~JCQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi1072284185/1434659607842-pgv4ql-1654533085801.mp4?Expires=1677764315&Signature=mZxX8~RmFOZ97bP9fp2rrN7jbSXTeKC8e6xH6mK5z7dlkF2kuxfrvZ1XrNA63UGwWkfhvHMuCJL1Chwda3VUW1csKvy1UsU31sTkXBHFUKAoJnbAcvXnEPWFWK6hzZgSgAWvWjiYfG1l~gL-lyo89Gj109uIsI6emoL~Eh~2XDQWzQgTYQbmFBRlYQdfjLm0XrCKVjmCsdrMrxqsK3BcuqV2uN-BBdGFJ~KdArjrzVunieRiod6zkPmZ6OR3RsL5r30hvhG3h8-mPhIWRpt75eKxMLcLZ~4L27u69iKoj1gHO9dZWUBGeh5xeDqpTikpvlWCbU2~nIz~JYZvDp4LFQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi2328346905/1434659607842-pgv4ql-1605648467813.mp4?Expires=1677764394&Signature=KcZR9IKZsOCYgC7rRSMnvnsXshC6tZddl0qjjBu9SIxm7e0ql9RGS1lfxC53m6Gk71ZWpeA7tIYe7wStIjwq2nA98T8M7lakLFZYNQrpFFx9xfKvl~grguc0PwFUyjMBxQWct3YPiiUJq5zP4ANRLHIvHefpAB6asQQSjiKVAEtrjPLigeVzqCDTOzUsHTepylp0fo22W5XjC9fVBsulNeTvLbOjCZc6oUQ6xxTuKcwo1zEOELQ583mKu5M~QsywxyBJ9zNuA4NUZHy4PCWa0aK9kinv7pOnGREQJ53idU~0dkjK2YokaKH-mfJTl9ay5XnuLOy5We6jgAzUsas4wQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  "https://imdb-video.media-imdb.com/vi2446179865/1434659607842-pgv4ql-1590503125523.mp4?Expires=1677764459&Signature=hj-qbmMqeYkiyJadItVV2DgDfIG4Mz03DOSeWf1x2BolRDVhQBGdAUMKL~Y6kWAB8VdDujBKqaV1CMv9NGO53oZVaGBT4dWZpXsW-bEWpCEbbgdbLzwTYHOjk02RysD6tHDz-lqpxipODgC99bknYOV2aDNOhYVXU4-qpI9x~iT80CNl8wZOeV4jgv0huQCkZzhbsyWGZOG1MZsK8K1mWP2n3mDUJbzE-taxI8hWK3uzhFLllTebmZ2QOFkIB2DbkqWTg~zXlyE58QEn9IsgFMybXcwaBQV70jViTbOyNbanI~zDQl-oVmGDDjqCUYPu~Oy2ZCrK2W8cV0Dz7mk09A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
];
export default function Player() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    generateRandom();
  }, []);
  function generateRandom(maxLimit = 9) {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand); // 99
    setIndex(rand);
    return rand;
  }

  return (
    <div>
      <div className="playerSreen">
        <div className="playerScreen_back">
          <BsArrowLeft
            className="playerScreen_backbutton"
            onClick={() => navigate(-1)}
          />
        </div>
        <video
          className="playerScreen_video"
          src={trailer[index]}
          autoPlay
          loop
          controls
          muted
        />
      </div>
    </div>
  );
}
