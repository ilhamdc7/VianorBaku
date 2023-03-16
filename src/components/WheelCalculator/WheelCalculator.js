import React, { useState, useEffect } from "react";
import { baseUrl } from "@/pages/api/api";





const WheelCalculator = () => {

  const [width, setWidth] = useState([])
  const [height, setHeight] = useState([])
  const [diametr, setDiametr] = useState([])
  const [changedWidth, setChangedWidth] = useState()
  const [changedHeight, setChangedHeight] = useState()
  const [changedDiametr, setChangedDiametr] = useState()
  const [secondChangedWidth, setSecondChangedWidth] = useState()
  const [secondChangedHeight, setSecondChangedHeight] = useState()
  const [secondChangedDiametr, setSecondChangedDiametr] = useState()
  const [results, setResults] = useState()

  console.log(results, 'masudiasghytudfasytdfys')

  const compare = async (e) => {
    e.preventDefault()
    await baseUrl.get(`/calculator?width_first=${changedWidth}&width_second=${secondChangedWidth}&height_first=${changedHeight}&height_second=${secondChangedHeight}&radius_first=${changedDiametr}&radius_second=${secondChangedDiametr}`, {
      headers: {
        'Content-Type': 'application/json',
        "Connection": "keep-alive",
        'Accept': '*/*'

      }
    })
      .then(res => setResults(res.data))
  }



  useEffect(() => {
    getChanges()
  }, [])


  const getChanges = async () => {
    await baseUrl.get(`/tyre_width?limit=100000000`)
      .then(res => setWidth(res.data.results))
    await baseUrl.get(`/tyre_height?limit=100000000`)
      .then(res => setHeight(res.data.results))
    await baseUrl.get(`/tyre_diametr?limit=100000000`)
      .then(res => setDiametr(res.data.results))
  }


  return (
    <div class="container mb-5">
      <form method="get">
        <div class="row justify-content-center mt-5 mb-5">
          <div class="col-xl-4 col-lg-5 col-sm-8 col-12 text-center">
            <label style={{ "color": "#f25900", "fontSize": "16px", "marginBottom": "10px" }}>
              <b> Avtomobilinizin təkər ölçüsü </b>
            </label>
            <table class="m-auto">
              <tr>
                <td>
                  <div class="">
                    <select
                      name="width"
                      class="block-finder__form-control block-finder__form-control--select"
                      style={{ "fontSize": "28px" }}
                      onChange={(e) => setChangedWidth(e.target.value)}
                    >
                      <option value={''}>En</option>
                      {width?.map((wdt) => (
                        <option value={wdt?.size}>{wdt?.size}</option>
                      ))}


                    </select>
                  </div>
                </td>

                <td>&nbsp;/&nbsp;</td>

                <td>
                  <div class="">
                    <select
                      name="height"
                      class="block-finder__form-control block-finder__form-control--select"
                      style={{ "fontSize": "28px" }}
                      onChange={(e) => setChangedHeight(e.target.value)}
                    >
                      <option value={''}>Hündürlük</option>
                      {height?.map((hgt) => (
                        <option value={hgt?.size}>{hgt?.size}</option>
                      ))}
                    </select>
                  </div>
                </td>

                <td>&nbsp;R&nbsp;</td>

                <td>
                  <div class="">
                    <select
                      name="radius"
                      class="block-finder__form-control block-finder__form-control--select"
                      style={{ "fontSize": "28px" }}
                      onChange={(e) => setChangedDiametr(e.target.value)}
                    >
                      <option value={''}>Diametr</option>
                      {diametr?.map((dmt) => (
                        <option value={dmt?.size}>{dmt?.size}</option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            </table>
            <img class="w-75 mb-2" src="http://www.vianorbaku.az/static/images/calc.png" />

            <table class="m-auto">
              <tr>
                <td>
                  <div class="">
                    <select
                      name="width"
                      class="block-finder__form-control block-finder__form-control--select"
                      style={{ "fontSize": "28px" }}
                      onChange={(e) => setSecondChangedWidth(e.target.value)}
                    >
                      <option value={''}>En</option>
                      {width?.map((wdt) => (
                        <option value={wdt?.size}>{wdt?.size}</option>
                      ))}


                    </select>
                  </div>
                </td>

                <td>&nbsp;/&nbsp;</td>

                <td>
                  <div class="">
                    <select
                      name="height"
                      class="block-finder__form-control block-finder__form-control--select"
                      style={{ "fontSize": "28px" }}
                      onChange={(e) => setSecondChangedHeight(e.target.value)}
                    >
                      <option value={''}>Hündürlük</option>
                      {height?.map((hgt) => (
                        <option value={hgt?.size}>{hgt?.size}</option>
                      ))}
                    </select>
                  </div>
                </td>

                <td>&nbsp;R&nbsp;</td>

                <td>
                  <div class="">
                    <select
                      name="radius"
                      class="block-finder__form-control block-finder__form-control--select"
                      style={{ "fontSize": "28px" }}
                      onChange={(e) => setSecondChangedDiametr(e.target.value)}
                    >
                      <option value={''}>Diametr</option>
                      {diametr?.map((dmt) => (
                        <option value={dmt?.size}>{dmt?.size}</option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            </table>
            <label style={{ "color": "#f25900", "fontSize": "16px" }}>
              <b> Yeni təkərlərin ölçüsü </b>
            </label>
          </div>
          <div class="col-xl-4 col-lg-3 col-sm-4 col-12   d-flex align-items-center">
            <button onClick={compare} class="block-finder__form-control block-finder__form-control--button tyres_filter ">
              Hesabla
            </button>
          </div>
        </div>
      </form>

      <table class="table w-50  m-auto text-center">
        <thead class="thead-dark">
          <tr>
            <th
              scope="col"
              style={{ "backgroundColor": "#f25900", "borderColor": "#f25900" }}
            >
              Göstərici
            </th>
            <th
              scope="col"
              style={{ "backgroundColor": "#f25900", "borderColor": "#f25900" }}
            >
              Köhnə
            </th>
            <th
              scope="col"
              style={{ "backgroundColor": "#f25900", "borderColor": "#f25900" }}
            >
              Yeni
            </th>
            <th
              scope="col"
              style={{ "backgroundColor": "#f25900", "borderColor": "#f25900" }}
            >
              Fərq
            </th>
          </tr>
        </thead>
        {results &&
          <tbody>
            <tr>
              <th scope="row">Diametr</th>
              <td>{results?.first_diameter} mm</td>
              <td>{results?.second_diameter} mm</td>
              <td>{results?.diameter_difference}</td>
            </tr>
            <tr>
              <th scope="row">En</th>
              <td>{results?.first_width} mm</td>
              <td>{results?.second_width} mm</td>
              <td>{results?.width_difference}</td>
            </tr>
            <tr>
              <th scope="row">Dairənin uzunluğu</th>
              <td>{results?.first_circumference} mm</td>
              <td>{results?.second_circumference} mm</td>
              <td>{results?.circ_difference}</td>
            </tr>
            <tr>
              <th scope="row">Profil hündürlüyü</th>
              <td>{results?.first_profile_height} mm</td>
              <td>{results?.second_profile_height} mm</td>
              <td>{results?.height_difference}</td>
            </tr>
            <tr>
              <th scope="row">1 km dövriyyə</th>
              <td>{results?.first_rev} mm</td>
              <td>{results?.second_rev} mm</td>
              <td>{results?.rev_difference}</td>
            </tr>
            <tr>
              <th scope="row">Klirens dəyişikliyi	</th>
              <td></td>
              <td>{results?.clearance_diff}</td>
              <td></td>
            </tr>
          </tbody>
        }
      </table>
      <div>
        {results &&
          <p
            class="result_true"
            style={{
              "textAlign": "center",
              margin: "20px",
              background: results?.color,
              width: "300px",
              padding: "10px",
              margin: "10px auto",
              color: "#fff"
            }}>
            {results?.bottom_text}
          </p>
        }
      </div>
    </div>
  );
};

export default WheelCalculator;
